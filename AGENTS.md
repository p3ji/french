# Objectif CBC

French preparation pilot for federal public servants working toward B/C levels.

## Stack and run
- Sites Vinext starter, React, TypeScript, Tailwind; browser-local learner state.
- `npm run dev` serves port 5173. `npm run build` builds for Sites.
- `npm run typecheck`, `npm test`, and `node scripts/validate-content.mjs` validate source, learning behaviour, and content corpus.
- Product code: `components/learning-app.tsx`; rules: `lib/learning.ts`; original content: `lib/content/`.

## Active Status & 10x Expansion Note
- **Repository Remote:** Linked and pushed to `https://github.com/p3ji/french.git`.
- **Structured Technical README:** `app/README.md` formatted with concise system mechanics and operational decision boundaries.
- **10x Content Corpus:** Expanded to 240 reading passages (720 reading Qs), 840 writing Qs, 900 vocabulary entries, 240 oral prompts, and 120 diagnostic Qs across 18 workplace themes.
- **140 Curriculum Sessions:** Structured into 10 Modules (14 sessions each) with a Module Selector and session search filter in `components/learning-app.tsx`.
- **Validation:** Run `node scripts/validate-content.mjs` to lint all question IDs, option bounds, and distractor explanation lengths (>15 chars).

## Rules
- CBC order is reading C, writing B, oral C. Brand: Objectif CBC.
- English guidance, French practice with `lang="fr"` annotations.
- Warm ivory, forest green, Georgia headings; mobile layout at 375px; 44px controls.
- Preserve the PDF references in the parent folder. Never copy them into this checkout, public assets, Git, or deployment.
- No accounts, analytics, runtime AI, microphone access, or official level prediction.
- Content IDs and schema versions are persistence contracts. Keep old IDs stable; migrate or explicitly reject incompatible backups.
- Read Sites skills before build/hosting. Reuse `.openai/hosting.json` project ID.

## Release gates
- All pilot content is original and uncalibrated. Fluent French educator review and learner feedback remain human release gates before wider access.
- Parent guide's `H:\My Drive\Brain2\00_Centralcommand.md` was unavailable during setup.
