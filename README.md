# Objectif CBC

A fourteen-session French preparation pilot for federal public servants with some French exposure. CBC means reading C, writing B, oral C. Reading and writing targets can each be set to B or C. English guidance accompanies original French practice.

## Run

Requires Node.js 22.13 or newer. In this directory:

```sh
npm run install:ci
npm run dev
```

The development site is served at http://localhost:5173. Run `npm run typecheck`, `npm test`, and `npm run build` for verification. For Sites packaging and private publishing, follow the Sites skills and reuse the project ID in `.openai/hosting.json`.

## Learning content

`lib/content/` contains 24 original reading passages with 72 questions, 84 written-expression questions, 90 vocabulary entries, 24 oral prompts, and a separate 12-question diagnostic. Six workplace themes support twelve themed lessons and two consolidation sessions. B/C tags express intended difficulty, not calibrated exam equivalence. Writing exercises use three choices and are learning exercises, not a replica of an official test.

The PDFs in the parent directory are references only. This Git repository is rooted here so they cannot enter a source upload. Public assets contain no PDFs.

## Progress and interfaces

Learner state is stored under `objectif-cbc.progress.v1` in browser local storage. `lib/types.ts` defines content, targets, attempts, reviews, and active-session records. `lib/learning.ts` handles deterministic selection, answer evaluation, first-attempt metrics, and calendar-day review intervals. Existing active sessions retain their question IDs after goal changes. Answer feedback survives reloads.

Progress exports identify Objectif CBC and schema/content version 1. Imports are validated before replacement and require an explicit confirmation. Invalid imports preserve existing progress. The UI reports blocked or full storage; users can export memory-held progress. Browser-data removal may erase local progress. There is no account sync, analytics, or learner backend.

Missed practice items enter review the next calendar day. Successful review answers schedule another review in 1, 3, and 7 days, then graduate after the next success; an error resets the sequence. Diagnostic answers guide priorities but do not enter spaced review or practice accuracy.

The optional WebMCP interface exposes `read_study_progress` and `start_or_resume_daily_session` only in supporting browsers. It does not answer questions. Unsupported browsers use the normal interface.

## Pilot review

See `docs/PILOT-REVIEW.md` for the educator review gate and a questionnaire to copy into an external form. Learner participation and fluent French educator review remain human steps before broader access. Live oral assessment, local-LLM conversations, recording, accounts, native apps, and offline installation are not implemented in this pilot.
