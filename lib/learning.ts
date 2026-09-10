import { z } from 'zod';
import type { ActiveSession, Attempt, LearnerState, Skill, Targets, ThemeId } from './types';
import { allQuestions, dailyQuestions, diagnosticQuestions, programme, questionById, vocabulary } from './content';
export const STORAGE_KEY='objectif-cbc.progress.v1';
export function initialState():LearnerState{return {version:1,contentVersion:1,brand:'Objectif CBC',onboarded:false,targets:{reading:'C',writing:'B'},diagnosticDone:false,completed:[],attempts:[],reviews:[],active:null,vocabularySeen:[]}}
export function localDay(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`}
export function afterDays(date:Date,days:number){const d=new Date(date);d.setDate(d.getDate()+days);return localDay(d)}
export function accuracy(state:LearnerState,skill?:Skill,objective?:string,diagnostic=false){const attempts=state.attempts.filter(a=>a.first&&(diagnostic?a.mode==='diagnostic':a.mode!=='diagnostic')&&(!skill||questionById[a.questionId].skill===skill)&&(!objective||questionById[a.questionId].objective===objective));return {total:attempts.length,correct:attempts.filter(a=>a.correct).length,percent:attempts.length?Math.round(attempts.filter(a=>a.correct).length/attempts.length*100):null}}
export function priorities(state:LearnerState){return [...new Set(allQuestions.map(q=>q.objective))].map(objective=>{const data=state.attempts.filter(a=>a.first&&questionById[a.questionId].objective===objective);return {objective,total:data.length,correct:data.filter(a=>a.correct).length}}).filter(x=>x.total>0&&x.correct<x.total).sort((a,b)=>a.correct/a.total-b.correct/b.total||b.total-a.total||a.objective.localeCompare(b.objective))}
const unseenRank=(state:LearnerState,id:string)=>state.attempts.some(a=>a.questionId===id)?1:0;
function rank(state:LearnerState,ids:string[]){const weak=priorities(state).map(p=>p.objective);return [...ids].sort((a,b)=>unseenRank(state,a)-unseenRank(state,b)||(weak.includes(questionById[a].objective)?0:1)-(weak.includes(questionById[b].objective)?0:1)||a.localeCompare(b,undefined,{numeric:true}))}
export function selectQuestions(state:LearnerState,theme:ThemeId|undefined,lessonIndex:number,targets:Targets=state.targets){
 const pool=dailyQuestions.filter(q=>!theme||q.theme===theme);const ids:string[]=[];
 for(const skill of ['reading','writing'] as const){const target=targets[skill];const b=pool.filter(q=>q.skill===skill&&q.level==='B');const c=pool.filter(q=>q.skill===skill&&q.level==='C');
  if(skill==='reading'){
   const passageIds=(items:typeof pool)=>[...new Set(items.map(q=>q.passageId!))];
   const bp=passageIds(b),cp=passageIds(c);
   const chosen=target==='C'?[bp[lessonIndex%bp.length],cp[lessonIndex%cp.length]]:[bp[lessonIndex%bp.length],bp[(lessonIndex+1)%bp.length]];
   if(!theme){const candidates=[...new Set(rank(state,pool.filter(q=>q.skill==='reading'&&(target==='C'||q.level==='B')).map(q=>q.id)).map(id=>questionById[id].passageId!))];chosen.splice(0,chosen.length,...candidates.slice(0,2))}
   ids.push(...pool.filter(q=>chosen.includes(q.passageId??'')).map(q=>q.id));
  }else{const rotate=(items:typeof pool,n:number)=>{const ordered=rank(state,items.map(q=>q.id));return [...ordered.slice(n),...ordered.slice(0,n)]};const bCount=target==='B'?4:2;const cCount=6-bCount;ids.push(...rotate(b,theme?lessonIndex*bCount:0).slice(0,bCount),...rotate(c,theme?lessonIndex*cCount:0).slice(0,cCount))}
 }
 return [...new Set(ids)];
}
export function createSession(state:LearnerState,id:string):ActiveSession{const def=programme.find(s=>s.id===id);if(!def)throw new Error('Unknown session.');return {id,mode:'session',title:def.title,theme:def.theme,lessonIndex:def.lessonIndex,questionIds:selectQuestions(state,def.theme,def.lessonIndex),index:0,answers:[],lessonSeen:false,vocabSeen:false}}
export function createDiagnostic():ActiveSession{return {id:'diagnostic',mode:'diagnostic',title:'Find your starting point.',lessonIndex:0,questionIds:diagnosticQuestions.map(q=>q.id),index:0,answers:[],lessonSeen:true,vocabSeen:true}}
export function createReview(state:LearnerState,now=new Date()):ActiveSession|null{const ids=rank(state,state.reviews.filter(r=>r.due<=localDay(now)).map(r=>r.questionId)).slice(0,8);return ids.length?{id:'review',mode:'review',title:'Make it stick.',lessonIndex:0,questionIds:ids,index:0,answers:[],lessonSeen:true,vocabSeen:true}:null}
export function createPractice(state:LearnerState,theme:ThemeId,skill:Skill):ActiveSession{const pool=dailyQuestions.filter(q=>q.theme===theme&&q.skill===skill);const ids=rank(state,pool.filter(q=>q.level===state.targets[skill]).map(q=>q.id)).slice(0,6);return {id:'practice',mode:'practice',title:'A little focused practice.',theme,lessonIndex:0,questionIds:ids,index:0,answers:[],lessonSeen:true,vocabSeen:true}}
export function submitAnswer(state:LearnerState,choice:number,now=new Date()):LearnerState{
 const active=state.active;if(!active||active.index>=active.questionIds.length||active.answers.length>active.index)return state;
 const q=questionById[active.questionIds[active.index]];if(!Number.isInteger(choice)||choice<0||choice>=q.options.length)throw new Error('Choose one of the available answers.');
 const correct=choice===q.answer;const attempt:Attempt={questionId:q.id,choice,correct,at:now.toISOString(),mode:active.mode,first:!state.attempts.some(a=>a.questionId===q.id)};
 let reviews=[...state.reviews];if(active.mode!=='diagnostic'){
  const existing=reviews.find(r=>r.questionId===q.id);reviews=reviews.filter(r=>r.questionId!==q.id);
  if(!correct)reviews.push({questionId:q.id,stage:0,due:afterDays(now,1)});
  else if(existing&&existing.stage<3)reviews.push({questionId:q.id,stage:existing.stage+1,due:afterDays(now,[1,3,7][existing.stage])});
 }
 return {...state,attempts:[...state.attempts,attempt],reviews,active:{...active,answers:[...active.answers,choice]}};
}
export function advance(state:LearnerState):LearnerState{const active=state.active;if(!active||active.answers.length<=active.index)return state;return {...state,active:{...active,index:active.index+1}}}
export function finish(state:LearnerState):LearnerState{const active=state.active;if(!active||active.index!==active.questionIds.length||!active.vocabSeen)return state;return {...state,active:null,diagnosticDone:state.diagnosticDone||active.mode==='diagnostic',completed:active.mode==='session'?[...new Set([...state.completed,active.id])]:state.completed}}
const knownId=z.string().refine(id=>!!questionById[id],'Unknown question.');
const date=z.string().datetime();const day=z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(s=>!Number.isNaN(Date.parse(s))&&new Date(s).toISOString().slice(0,10)===s,'Invalid calendar date.');
const mode=z.enum(['session','diagnostic','review','practice']);
const activeSchema=z.object({id:z.string(),mode,title:z.string().max(200),theme:z.enum(['training','teamwork','projects','telework','leadership','conflict']).optional(),lessonIndex:z.number().int().min(0).max(1),questionIds:z.array(knownId).min(1).max(30),index:z.number().int().nonnegative(),answers:z.array(z.number().int().nonnegative()).max(30),lessonSeen:z.boolean(),vocabSeen:z.boolean()}).strict();
const schema=z.object({version:z.literal(1),contentVersion:z.literal(1),brand:z.literal('Objectif CBC'),onboarded:z.boolean(),targets:z.object({reading:z.enum(['B','C']),writing:z.enum(['B','C'])}).strict(),diagnosticDone:z.boolean(),completed:z.array(z.string().refine(id=>programme.some(s=>s.id===id))).max(14),attempts:z.array(z.object({questionId:knownId,choice:z.number().int().nonnegative(),correct:z.boolean(),at:date,mode,first:z.boolean()}).strict()).max(100000),reviews:z.array(z.object({questionId:knownId,stage:z.number().int().min(0).max(3),due:day}).strict()).max(allQuestions.length),active:activeSchema.nullable(),vocabularySeen:z.array(z.string().refine(id=>vocabulary.some(v=>v.id===id))).max(vocabulary.length)}).strict();
export function parseProgress(text:string):LearnerState{
 if(text.length>10_000_000)throw new Error('This backup is too large. Choose an Objectif CBC progress export.');
 let data:LearnerState;try{data=schema.parse(JSON.parse(text)) as LearnerState}catch{throw new Error('This is not a compatible Objectif CBC backup. Your current progress has not changed.')}
 const seen=new Set<string>();for(const a of data.attempts){const q=questionById[a.questionId];if(a.choice>=q.options.length||a.correct!==(a.choice===q.answer)||a.first===seen.has(q.id)||!!q.diagnostic!==(a.mode==='diagnostic'))throw new Error('The backup contains inconsistent answers. Your current progress has not changed.');seen.add(q.id)}
 for(const key of ['completed','vocabularySeen'] as const)if(new Set(data[key]).size!==data[key].length)throw new Error('The backup contains duplicate records.');
 if(new Set(data.reviews.map(r=>r.questionId)).size!==data.reviews.length||data.reviews.some(r=>questionById[r.questionId].diagnostic||!data.attempts.some(a=>a.questionId===r.questionId&&!a.correct)))throw new Error('The backup contains invalid review records.');
 const a=data.active;if(a){if(a.index>a.questionIds.length||a.answers.length<a.index||a.answers.length>Math.min(a.index+1,a.questionIds.length)||new Set(a.questionIds).size!==a.questionIds.length||a.answers.some((c,i)=>c>=questionById[a.questionIds[i]].options.length)||a.questionIds.some(id=>!!questionById[id].diagnostic!==(a.mode==='diagnostic'))||a.mode==='session'&&!programme.some(s=>s.id===a.id&&s.theme===a.theme&&s.lessonIndex===a.lessonIndex)||a.mode!=='session'&&a.id!==a.mode)throw new Error('The saved session is inconsistent. Your current progress has not changed.');
  const recorded=data.attempts.slice(data.attempts.length-a.answers.length);if(a.answers.some((choice,i)=>recorded[i]?.questionId!==a.questionIds[i]||recorded[i]?.choice!==choice||recorded[i]?.mode!==a.mode))throw new Error('The saved session does not match its answer history. Your current progress has not changed.');
 }
 return data;
}
export function exportProgress(state:LearnerState){return JSON.stringify(state,null,2)}
