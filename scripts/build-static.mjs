import { cp, mkdir, rm } from 'node:fs/promises';
import { basename } from 'node:path';

const projectRoot = new URL('../', import.meta.url);
const outputDirectory = new URL('../dist/', import.meta.url);
const publicFiles = [
  'index.html',
  'app.js',
  'styles.css',
  'directory.css',
  'languages.css',
  'responsive.css'
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of publicFiles) {
  await cp(new URL(file, projectRoot), new URL(file, outputDirectory));
}

await cp(new URL('profiles/', projectRoot), new URL('profiles/', outputDirectory), {
  recursive: true,
  filter: source => basename(source) !== 'README.md'
});

console.log('Static FindMed site prepared in dist/.');
