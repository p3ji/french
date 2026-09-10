import test from 'node:test';
import assert from 'node:assert/strict';
import { allPassages, allQuestions, dailyQuestions, diagnosticQuestions, themes, vocabulary, oralPrompts, programme, questionById } from '../lib/content';
import { initialState, createSession, createDiagnostic, createPractice, createReview, submitAnswer, advance, finish, parseProgress, exportProgress, accuracy, afterDays, selectQuestions, priorities } from '../lib/learning';

function started() {
  const s = initialState();
  s.onboarded = true;
  s.active = createSession(s, 'session-1');
  return s;
}

const now = new Date('2026-09-10T12:00:00Z');

test('content meets 10x target counts and has complete theme coverage', () => {
  assert.equal(allPassages.filter(p => !p.id.startsWith('diag')).length, 240);
  assert.equal(dailyQuestions.filter(q => q.skill === 'reading').length, 720);
  assert.equal(dailyQuestions.filter(q => q.skill === 'writing').length, 840);
  assert.equal(vocabulary.length, 900);
  assert.equal(oralPrompts.length, 240);
  assert.equal(programme.length, 140);
  assert.equal(diagnosticQuestions.length, 120);
  assert.equal(themes.length, 18);

  for (const t of themes) {
    assert.ok(vocabulary.filter(v => v.theme === t.id).length >= 40);
    assert.ok(oralPrompts.filter(p => p.theme === t.id).length >= 10);
    assert.ok(dailyQuestions.filter(q => q.theme === t.id && q.skill === 'writing' && q.level === 'B').length >= 20);
    assert.ok(dailyQuestions.filter(q => q.theme === t.id && q.skill === 'writing' && q.level === 'C').length >= 20);
  }
});

test('IDs, keys, distractor explanations, and passage references are valid', () => {
  assert.equal(new Set(allQuestions.map(q => q.id)).size, allQuestions.length);
  for (const q of allQuestions) {
    assert.ok(q.answer >= 0 && q.answer < q.options.length);
    assert.equal(new Set(q.options).size, q.options.length);
    assert.equal(q.options.length, q.explanations.length);
    assert.ok(q.explanations.every(x => x.length > 15));
    if (q.passageId) assert.ok(allPassages.some(p => p.id === q.passageId));
  }
  for (const p of allPassages) assert.equal(allQuestions.filter(q => q.passageId === p.id).length, 3);
});

test('diagnostic questions never enter the daily programme', () => {
  const s = started();
  for (const p of programme) assert.ok(createSession(s, p.id).questionIds.every(id => !questionById[id].diagnostic));
  assert.equal(createDiagnostic().questionIds.length, 120);
});

test('independent targets change the reading and writing mix', () => {
  const s = initialState();
  const bb = selectQuestions(s, 'training', 0, { reading: 'B', writing: 'B' }).map(id => questionById[id]);
  const cc = selectQuestions(s, 'training', 0, { reading: 'C', writing: 'C' }).map(id => questionById[id]);
  assert.equal(bb.filter(q => q.skill === 'reading' && q.level === 'C').length, 0);
  assert.equal(cc.filter(q => q.skill === 'reading' && q.level === 'C').length, 3);
  assert.equal(bb.filter(q => q.skill === 'writing' && q.level === 'C').length, 2);
  assert.equal(cc.filter(q => q.skill === 'writing' && q.level === 'C').length, 4);
});

test('all session and target combinations supply twelve distinct questions', () => {
  for (const reading of ['B', 'C'] as const)
    for (const writing of ['B', 'C'] as const) {
      const s = initialState();
      s.targets = { reading, writing };
      for (const p of programme.slice(0, 14)) {
        const ids = createSession(s, p.id).questionIds;
        assert.equal(ids.length, 12);
        assert.equal(new Set(ids).size, 12);
      }
    }
});

test('submitted answer and feedback position survive backup round trip', () => {
  let s = started();
  const q = questionById[s.active!.questionIds[0]];
  s = submitAnswer(s, q.answer, now);
  const restored = parseProgress(exportProgress(s));
  assert.deepEqual(restored, s);
  assert.equal(restored.active!.index, 0);
  assert.equal(restored.active!.answers.length, 1);
  assert.equal(advance(restored).active!.index, 1);
});

test('double submission cannot duplicate an attempt', () => {
  let s = started();
  s = submitAnswer(s, 0, now);
  assert.equal(submitAnswer(s, 1, now).attempts.length, 1);
});

test('an invalid answer cannot mutate progress', () => {
  const s = started();
  assert.throws(() => submitAnswer(s, 99, now));
  assert.equal(s.attempts.length, 0);
});

test('missed practice returns tomorrow and correct review progresses 1, 3, 7 days', () => {
  let s = started();
  const q = questionById[s.active!.questionIds[0]];
  s = submitAnswer(s, (q.answer + 1) % 3, now);
  assert.equal(s.reviews[0].due, afterDays(now, 1));
  assert.equal(createReview(s, now), null);
  for (const days of [1, 3, 7]) {
    const time = new Date(s.reviews[0].due + 'T12:00:00');
    s.active = createReview(s, time);
    s = submitAnswer(s, q.answer, time);
    assert.equal(s.reviews[0].due, afterDays(time, days));
  }
  const time = new Date(s.reviews[0].due + 'T12:00:00');
  s.active = createReview(s, time);
  s = submitAnswer(s, q.answer, time);
  assert.equal(s.reviews.length, 0);
});

test('a review error resets the spacing', () => {
  let s = started();
  const q = questionById[s.active!.questionIds[0]];
  s = submitAnswer(s, (q.answer + 1) % 3, now);
  s.reviews[0].stage = 2;
  const time = new Date('2026-09-20T12:00:00');
  s.active = createReview(s, time);
  s = submitAnswer(s, (q.answer + 1) % 3, time);
  assert.equal(s.reviews[0].stage, 0);
  assert.equal(s.reviews[0].due, afterDays(time, 1));
});

test('diagnostic errors affect priorities but never enter spaced practice review', () => {
  let s = initialState();
  s.active = createDiagnostic();
  const q = questionById[s.active.questionIds[0]];
  s = submitAnswer(s, (q.answer + 1) % 3, now);
  assert.equal(s.reviews.length, 0);
  assert.equal(accuracy(s).total, 0);
  assert.equal(accuracy(s, undefined, undefined, true).total, 1);
  assert.equal(priorities(s)[0].objective, q.objective);
});

test('retries do not inflate first-attempt accuracy', () => {
  let s = started();
  const q = questionById[s.active!.questionIds[0]];
  s = submitAnswer(s, (q.answer + 1) % 3, now);
  s.active = { ...s.active!, index: 0, answers: [] };
  s = submitAnswer(s, q.answer, now);
  assert.equal(accuracy(s).total, 1);
  assert.equal(accuracy(s).correct, 0);
  assert.equal(s.attempts[1].first, false);
});

test('new material is prioritised in focused practice', () => {
  let s = initialState();
  s.active = createPractice(s, 'training', 'writing');
  const first = s.active.questionIds[0];
  s = submitAnswer(s, questionById[first].answer, now);
  assert.notEqual(createPractice(s, 'training', 'writing').questionIds[0], first);
});

test('completion requires all questions and the vocabulary step', () => {
  let s = started();
  assert.equal(finish(s).completed.length, 0);
  while (s.active!.index < s.active!.questionIds.length) {
    s = submitAnswer(s, questionById[s.active!.questionIds[s.active!.index]].answer, now);
    s = advance(s);
  }
  assert.equal(finish(s).completed.length, 0);
  s.active!.vocabSeen = true;
  s = finish(s);
  assert.deepEqual(s.completed, ['session-1']);
  assert.equal(s.active, null);
  assert.deepEqual(parseProgress(exportProgress(s)), s);
});

test('unsupported, malformed, and tampered backups are rejected', () => {
  const s = started();
  for (const bad of [
    '{oops',
    JSON.stringify({ ...s, version: 2 }),
    JSON.stringify({ ...s, brand: 'Other' }),
    JSON.stringify({ ...s, completed: ['session-999'] }),
    JSON.stringify({ ...s, active: { ...s.active, index: 90 } })
  ])
    assert.throws(() => parseProgress(bad));
  const q = questionById[s.active!.questionIds[0]];
  const answered = submitAnswer(s, q.answer, now);
  const tampered = structuredClone(answered);
  tampered.attempts[0].correct = false;
  assert.throws(() => parseProgress(JSON.stringify(tampered)));
  assert.equal(s.attempts.length, 0);
});

test('unknown IDs, duplicate reviews and invalid calendar dates are rejected', () => {
  let s = started();
  const q = questionById[s.active!.questionIds[0]];
  s = submitAnswer(s, (q.answer + 1) % 3, now);
  const bad = structuredClone(s);
  bad.reviews.push({ ...bad.reviews[0] });
  assert.throws(() => parseProgress(JSON.stringify(bad)));
  bad.reviews = [{ questionId: q.id, stage: 0, due: '2026-02-31' }];
  assert.throws(() => parseProgress(JSON.stringify(bad)));
  bad.reviews = [{ questionId: 'unknown', stage: 0, due: '2026-09-11' }];
  assert.throws(() => parseProgress(JSON.stringify(bad)));
});

test('changing targets never rewrites the active question list', () => {
  const s = started();
  const ids = [...s.active!.questionIds];
  s.targets = { reading: 'B', writing: 'C' };
  assert.deepEqual(s.active!.questionIds, ids);
});

test('calendar spacing crosses month and year boundaries', () => {
  assert.equal(afterDays(new Date(2026, 11, 31, 12), 1), '2027-01-01');
  assert.equal(afterDays(new Date(2026, 1, 28, 12), 1), '2026-03-01');
});
