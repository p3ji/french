# Objectif CBC

Objectif CBC is a local-first French preparation client executing deterministic spaced-repetition algorithms in browser storage for federal language evaluations.

## 1. Intuition & Mental Model

Think of this application as a personal flashcard box sitting on your desk. You sort questions into buckets based on your answers, but keep every card inside your office.

Language evaluation prep often relies on server-rendered web forms or opaque proprietary scoring algorithms. Server-side tracking introduces privacy risks and network latency during daily practice drills. Federal public servants need immediate feedback without sending personal performance logs across external networks.

You might wonder: how can a client-only web app handle long-term retention without a backend database?

Instead of querying a remote server, the application maintains state inside browser `localStorage`. Deterministic rotation algorithms compute review intervals directly on your device.

## 2. Underlying Mechanics

The application runs as a static single-page application built with Vite, React 19, TypeScript, and Tailwind CSS.

```
[ Learner Choice ] ---> [ Deterministic Evaluator ] ---> [ Spaced Repetition Engine ]
                                                                   |
                                                                   v
[ Zod Validation ] <--- [ JSON State Export/Import ] <--- [ localStorage ]
```

Execution follows four primary subsystems:

- **Target Selection:** The engine inspects your target reading (B/C) and writing (B/C) levels. It balances passage difficulty across a 14-session curriculum.
- **Interval Spacing:** Correct review answers advance questions through 1-day, 3-day, and 7-day intervals. An incorrect answer resets the item to stage 0 for next-day review.
- **State Persistence:** The app serializes learner progress into `objectif-cbc.progress.v1` in `localStorage`. Zod schemas strictly validate state structure during export and import.
- **WebMCP Integration:** Supporting browsers expose state tools like `read_study_progress` through WebMCP without exposing answer logic.

### Back-of-the-Envelope Footprint

- **Content Corpus:** 24 reading passages (72 questions), 84 writing questions, 90 vocabulary items, 24 oral prompts, and 12 diagnostic questions.
- **Memory Footprint:** 1,000 attempts consume roughly \$120\text{ KB}\$ of JSON storage. The Zod validator caps backup imports at \$10\text{ MB}\$ to protect browser memory.

## 3. Bottlenecks & Failure Modes

- **LocalStorage Quotas:** Browsers enforce a strict 5 MB limit on `localStorage`. High-volume attempt histories exceeding 35,000 records will fail to save without manual exports.
- **Cache Eviction:** Clearing browser browsing data purges all unexported local progress.
- **Uncalibrated Content:** Practice questions test target grammar and reading patterns, but do not predict official PSC exam scores.

## 4. Production Realities & Decision Boundaries

### Quick Start

Requires Node.js 22.13 or newer. Run commands inside `app/`:

```sh
npm run install:ci
npm run dev
```

Visit `http://localhost:5173`. Run validation commands before committing:

```sh
npm run typecheck
npm test
npm run build
```

### When to Use
- **Self-Paced Federal Prep:** You need offline-capable, zero-telemetry practice for Canadian public service B/C French evaluations.
- **Static Hosting:** You want to deploy a zero-maintenance client bundle to static platforms like Cloudflare Pages.

### When NOT to Use
- **Multi-Device Sync:** You require automatic cross-device synchronization without exporting state files manually.
- **Official Exam Scoring:** You expect automated AI models to forecast official Public Service Commission results.
