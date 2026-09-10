export type Level = 'B' | 'C';
export type Skill = 'reading' | 'writing';
export type ThemeId =
  | 'training'
  | 'teamwork'
  | 'projects'
  | 'telework'
  | 'leadership'
  | 'conflict'
  | 'policy'
  | 'procurement'
  | 'bilingualism'
  | 'public-engagement'
  | 'it-digital'
  | 'finance'
  | 'staffing'
  | 'crisis-mgmt'
  | 'audit'
  | 'strategic-planning'
  | 'services-canada'
  | 'values-ethics';

export type Question = {
  id: string;
  theme: ThemeId;
  skill: Skill;
  level: Level;
  objective: string;
  prompt: string;
  options: string[];
  answer: number;
  explanations: string[];
  passageId?: string;
  diagnostic?: boolean;
};

export type Passage = {
  id: string;
  theme: ThemeId;
  level: Level;
  title: string;
  text: string;
};

export type Vocabulary = {
  id: string;
  theme: ThemeId;
  french: string;
  english: string;
  example: string;
};

export type OralPrompt = {
  id: string;
  theme: ThemeId;
  level: Level;
  prompt: string;
  guidance: string;
};

export type Lesson = {
  title: string;
  explanation: string;
  example: string;
  translation: string;
};

export type Theme = {
  id: ThemeId;
  title: string;
  french: string;
  description: string;
  lessons: [Lesson, Lesson];
};

export type Targets = Record<Skill, Level>;
export type Attempt = {
  questionId: string;
  choice: number;
  correct: boolean;
  at: string;
  mode: 'session' | 'diagnostic' | 'review' | 'practice';
  first: boolean;
};
export type ReviewItem = { questionId: string; stage: number; due: string };
export type ActiveSession = {
  id: string;
  mode: Attempt['mode'];
  title: string;
  theme?: ThemeId;
  moduleId?: number;
  lessonIndex: number;
  questionIds: string[];
  index: number;
  answers: number[];
  lessonSeen: boolean;
  vocabSeen: boolean;
};
export type LearnerState = {
  version: 1;
  contentVersion: 1;
  brand: 'Objectif CBC';
  onboarded: boolean;
  targets: Targets;
  diagnosticDone: boolean;
  completed: string[];
  attempts: Attempt[];
  reviews: ReviewItem[];
  active: ActiveSession | null;
  vocabularySeen: string[];
};
