# Objectif CBC

French preparation pilot for federal public servants working toward B/C levels.

## Stack and run
- Sites Vinext starter, React, TypeScript, Tailwind; browser-local learner state.
- `npm run dev` serves port 5173. `npm run build` builds for Sites.
- `npm run typecheck` and `npm test` validate source and learning behaviour.
- Product code: `components/learning-app.tsx`; rules: `lib/learning.ts`; original content: `lib/content/`.

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
