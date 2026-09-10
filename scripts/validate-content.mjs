import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

await mkdir('.test-build', { recursive: true });

// Build a bundle of the content validator script
await build({
  entryPoints: ['scripts/run-content-validation.ts'],
  outfile: '.test-build/validate-content.mjs',
  bundle: true,
  platform: 'node',
  format: 'esm',
  packages: 'external'
});

const result = spawnSync(process.execPath, ['.test-build/validate-content.mjs'], {
  stdio: 'inherit'
});

process.exitCode = result.status ?? 1;
