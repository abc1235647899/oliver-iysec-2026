#!/usr/bin/env node
/**
 * Convert provided shipping award photos to ~1600px long-side JPEGs into public/photos/shipping/.
 * Do not crop; keep all content; preserve watermarks.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'public', 'photos', 'shipping')
fs.mkdirSync(OUT_DIR, { recursive: true })

const candidates = [
  { key: '01-trophy', uploads: '/home/ubuntu/.cursor/projects/workspace/uploads/01-trophy_4a6c.jpg', alt: path.join(ROOT, 'shipping-award', '01-trophy.jpg') },
  { key: '02-certificate', uploads: '/home/ubuntu/.cursor/projects/workspace/uploads/02-certificate_9969.jpg', alt: path.join(ROOT, 'shipping-award', '02-certificate.jpg') },
  { key: '03-stage-group', uploads: '/home/ubuntu/.cursor/projects/workspace/uploads/03-stage-group_acd2.jpg', alt: path.join(ROOT, 'shipping-award', '03-stage-group.jpg') },
  { key: '04-lobby-banner', uploads: '/home/ubuntu/.cursor/projects/workspace/uploads/04-lobby-banner_44ff.jpg', alt: null },
  { key: '05-pointing-poster', uploads: '/home/ubuntu/.cursor/projects/workspace/uploads/05-pointing-poster_b635.jpg', alt: path.join(ROOT, 'shipping-award', '05-pointing-poster.jpg') },
  { key: '06-cosco-tower', uploads: '/home/ubuntu/.cursor/projects/workspace/uploads/06-cosco-tower_e7b5.jpg', alt: null },
]

function findSrc(entry) {
  const a = entry.alt
  if (a && fs.existsSync(a)) return a
  if (fs.existsSync(entry.uploads)) return entry.uploads
  return null
}

async function processOne(entry) {
  const src = findSrc(entry)
  if (!src) {
    console.error('Missing input for', entry.key)
    return false
  }
  const out = path.join(OUT_DIR, `${entry.key}.jpg`)
  const img = sharp(src).rotate()
  const meta = await img.metadata()
  const width = meta.width ?? 1600
  await img
    .resize({ width: Math.min(1600, width), height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(out)
  console.log('Wrote', path.relative(ROOT, out))
  return true
}

async function main() {
  let ok = true
  for (const c of candidates) {
    const res = await processOne(c)
    ok = ok && res
  }
  process.exit(ok ? 0 : 1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

