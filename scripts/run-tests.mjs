import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
await mkdir('.test-build',{recursive:true});
await build({entryPoints:['tests/learning.test.ts'],outfile:'.test-build/learning.test.mjs',bundle:true,platform:'node',format:'esm',packages:'external'});
const result=spawnSync(process.execPath,['--test','.test-build/learning.test.mjs'],{stdio:'inherit'});
process.exitCode=result.status??1;
