import { themes } from './themes';
import { passages, readingQuestions } from './reading';
import { writingQuestions } from './writing';
import { vocabulary, oralPrompts } from './resources';
import { diagnosticPassages, diagnosticQuestions } from './diagnostic';

export { themes, vocabulary, oralPrompts, diagnosticQuestions };
export const contentVersion = 1;
export const allPassages = [...passages, ...diagnosticPassages];
export const dailyQuestions = [...readingQuestions, ...writingQuestions];
export const allQuestions = [...dailyQuestions, ...diagnosticQuestions];
export const questionById = Object.fromEntries(allQuestions.map(q => [q.id, q]));
export const passageById = Object.fromEntries(allPassages.map(p => [p.id, p]));

// Assembly of 140 curriculum sessions across 10 Modules (14 sessions per module)
export const programme = Array.from({ length: 140 }, (_, i) => {
  const moduleIndex = Math.floor(i / 14); // 0..9
  const sessionInModule = i % 14; // 0..13
  const themeIndex = (moduleIndex * 2 + Math.floor(sessionInModule / 2)) % themes.length;
  const isConsolidation = sessionInModule >= 12;

  const theme = !isConsolidation ? themes[themeIndex].id : undefined;
  const lessonIndex = sessionInModule % 2;

  let title = '';
  if (!isConsolidation) {
    title = lessonIndex === 0 ? themes[themeIndex].french : `${themes[themeIndex].title} — Aller plus loin.`;
  } else if (sessionInModule === 12) {
    title = `Module ${moduleIndex + 1} : Relier les idées.`;
  } else {
    title = `Module ${moduleIndex + 1} : Faire le point.`;
  }

  const description = !isConsolidation
    ? themes[themeIndex].description
    : sessionInModule === 12
    ? 'Connect ideas across workplace themes and revisit your weaker skills.'
    : 'Bring your learning together, then choose what to practise next.';

  return {
    id: `session-${i + 1}`,
    number: i + 1,
    moduleId: moduleIndex + 1,
    theme,
    lessonIndex,
    title,
    description
  };
});
