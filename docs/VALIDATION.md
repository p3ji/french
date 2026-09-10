# Pilot validation

## Automated rules and content

18 focused tests cover content counts and keys, all target/session combinations, diagnostic isolation, first-attempt metrics, answer persistence, duplicate submission, review intervals and resets, session completion, backup round trips, and invalid imports. `npm test` runs these tests. `npm run typecheck` checks TypeScript.

## Browser checks

Tested the optional diagnostic and a complete guided session at 375px, including radio selection, explanations, vocabulary reveal, completion, and saved progress. Verified reload recovery on the submitted-answer feedback screen, keyboard Space/arrow selection, backup download, valid import, cancelled import, and rejected invalid import without data loss. Checked all four main views at 375, 768, and 1440px and at 200% text size on mobile; corrected enlarged-text overflow in theme cards. The exercise view also fits enlarged mobile text. This preview is separate from learner data on a future hosted origin.

The production build succeeds. The Sites Windows wrapper misresolved npm; running the same declared `npm run build` through npm's JavaScript entrypoint succeeded. TypeScript validation passes. The Worker output contains a default object with an async fetch handler.

## Remaining human checks

French educator review and real learner feedback have not taken place. B/C levels are authoring targets, not calibrated scoring. The external questionnaire is prepared in `PILOT-REVIEW.md`; no participants have been contacted.

The available browser does not expose a supported WebMCP context, so its optional tools have not been verified against a live WebMCP implementation. They are feature-detected and not required for the normal UI.
