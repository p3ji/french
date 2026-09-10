import assert from 'node:assert/strict';
import {
  allPassages,
  allQuestions,
  dailyQuestions,
  diagnosticQuestions,
  themes,
  vocabulary,
  oralPrompts,
  programme
} from '../lib/content';

console.log('Validating Objectif CBC 10x Content Corpus...');

// 1. Target Counts
assert.equal(allPassages.filter(p => !p.id.startsWith('diag')).length, 240, 'Must have 240 reading passages');
assert.equal(dailyQuestions.filter(q => q.skill === 'reading').length, 720, 'Must have 720 reading questions');
assert.equal(dailyQuestions.filter(q => q.skill === 'writing').length, 840, 'Must have 840 writing questions');
assert.equal(vocabulary.length, 900, 'Must have 900 vocabulary items');
assert.equal(oralPrompts.length, 240, 'Must have 240 oral prompts');
assert.equal(diagnosticQuestions.length, 120, 'Must have 120 diagnostic questions');
assert.equal(programme.length, 140, 'Must have 140 curriculum sessions');
assert.equal(themes.length, 18, 'Must have 18 themes');

// 2. ID Uniqueness & Schema Validity
const questionIds = new Set<string>();
for (const q of allQuestions) {
  assert.ok(!questionIds.has(q.id), `Duplicate question ID: ${q.id}`);
  questionIds.add(q.id);

  assert.ok(q.options.length >= 2, `Question ${q.id} must have at least 2 options`);
  assert.ok(q.answer >= 0 && q.answer < q.options.length, `Question ${q.id} answer out of bounds`);
  assert.equal(new Set(q.options).size, q.options.length, `Question ${q.id} has duplicate options`);
  assert.equal(q.options.length, q.explanations.length, `Question ${q.id} options/explanations count mismatch`);
  assert.ok(q.explanations.every(x => x.length > 15), `Question ${q.id} has explanation under 15 chars`);

  if (q.passageId) {
    assert.ok(allPassages.some(p => p.id === q.passageId), `Question ${q.id} references missing passage ${q.passageId}`);
  }
}

// 3. Passages & Questions Pairing
const passageIds = new Set<string>();
for (const p of allPassages) {
  assert.ok(!passageIds.has(p.id), `Duplicate passage ID: ${p.id}`);
  passageIds.add(p.id);
  const relatedQuestions = allQuestions.filter(q => q.passageId === p.id);
  assert.equal(relatedQuestions.length, 3, `Passage ${p.id} must have exactly 3 questions`);
}

// 4. Vocabulary & Oral Prompts
const vocabIds = new Set<string>();
for (const v of vocabulary) {
  assert.ok(!vocabIds.has(v.id), `Duplicate vocabulary ID: ${v.id}`);
  vocabIds.add(v.id);
}

const oralIds = new Set<string>();
for (const o of oralPrompts) {
  assert.ok(!oralIds.has(o.id), `Duplicate oral prompt ID: ${o.id}`);
  oralIds.add(o.id);
}

// 5. Theme Distribution
for (const t of themes) {
  const vCount = vocabulary.filter(v => v.theme === t.id).length;
  assert.ok(vCount >= 40, `Theme ${t.id} must have at least 40 vocabulary items (found ${vCount})`);

  const oCount = oralPrompts.filter(o => o.theme === t.id).length;
  assert.ok(oCount >= 10, `Theme ${t.id} must have at least 10 oral prompts (found ${oCount})`);

  const wB = dailyQuestions.filter(q => q.theme === t.id && q.skill === 'writing' && q.level === 'B').length;
  const wC = dailyQuestions.filter(q => q.theme === t.id && q.skill === 'writing' && q.level === 'C').length;
  assert.ok(wB >= 20, `Theme ${t.id} writing Level B count (${wB}) under minimum threshold`);
  assert.ok(wC >= 20, `Theme ${t.id} writing Level C count (${wC}) under minimum threshold`);
}

console.log('✅ Content validation passed cleanly!');
