/**
 * Regenerates favicon assets from public/images/favicon-source.png
 * Run: node scripts/generate-favicons.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'public/images/favicon-source.png');
const tmp256 = path.join(root, '.tmp-favicon-256.png');

if (!fs.existsSync(source)) {
  console.error('Missing', source);
  process.exit(1);
}

execSync(`sips -s format png "${source}" --out "${tmp256}" -z 256 256`, { stdio: 'inherit' });

const b64 = fs.readFileSync(tmp256).toString('base64');

function svgFavicon(w, h, rx) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <defs>
    <clipPath id="r"><rect width="${w}" height="${h}" rx="${rx}" ry="${rx}"/></clipPath>
  </defs>
  <g clip-path="url(#r)">
    <image href="data:image/png;base64,${b64}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>
  </g>
</svg>`;
}

fs.writeFileSync(path.join(root, 'public/favicon.svg'), svgFavicon(32, 32, 10));
fs.writeFileSync(path.join(root, 'public/apple-touch-icon.svg'), svgFavicon(180, 180, 40));

for (const size of [16, 32, 192]) {
  const out = path.join(root, `public/favicon-${size}.png`);
  execSync(`sips -z ${size} ${size} "${tmp256}" --out "${out}"`, { stdio: 'inherit' });
}

fs.unlinkSync(tmp256);
console.log('Favicons generated in public/');
