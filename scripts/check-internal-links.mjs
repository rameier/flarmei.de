import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import process from 'node:process';
import { fileURLToPath, URL } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? findHtmlFiles(path) : [path];
    }),
  );

  return nestedFiles.flat().filter((path) => extname(path) === '.html');
}

function isPageLinkWithoutTrailingSlash(href) {
  if (!href.startsWith('/') || href.startsWith('//')) return false;

  const pathname = href.split(/[?#]/, 1)[0];
  if (pathname === '/' || pathname.endsWith('/')) return false;

  const lastSegment = pathname.slice(pathname.lastIndexOf('/') + 1);
  return !lastSegment.includes('.');
}

const failures = [];

for (const file of await findHtmlFiles(outputDirectory)) {
  const html = await readFile(file, 'utf8');
  const links = html.matchAll(/<a\b[^>]*\bhref=(["'])(.*?)\1/gi);

  for (const [, , href] of links) {
    if (isPageLinkWithoutTrailingSlash(href)) {
      failures.push(`${relative(outputDirectory, file)}: ${href}`);
    }
  }
}

if (failures.length > 0) {
  process.stderr.write('Internal page links without a trailing slash:\n');
  process.stderr.write(`${failures.map((failure) => `- ${failure}`).join('\n')}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write('All internal page links use trailing slashes.\n');
}
