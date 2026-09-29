#!/usr/bin/env node
/**
 * Convert provided PNG uploads to ~1600px long-side JPEGs into public/photos/moments/.
 * No cropping; keep all content in frame.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'public', 'photos', 'moments')
const inputs = [
  {
    src: '/home/ubuntu/.cursor/projects/workspace/uploads/20-oliver-speech-marine_b44b.png',
    out: path.join(OUT_DIR, '20-oliver-speech-marine.jpg'),
  },
  {
    src: '/home/ubuntu/.cursor/projects/workspace/uploads/21-ceremony-group-hall_c415.png',
    out: path.join(OUT_DIR, '21-ceremony-group-hall.jpg'),
  },
]

fs.mkdirSync(OUT_DIR, { recursive: true })

async function convertOne(src, out) {
  if (!fs.existsSync(src)) {
    console.error('Missing input:', src)
    return false
  }
  await sharp(src)
    .rotate() // obey EXIF
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(out)
  console.log('Wrote', path.relative(ROOT, out))
  return true
}

async function main() {
  let ok = true
  for (const it of inputs) {
    const res = await convertOne(it.src, it.out)
    ok = ok && res
  }
  process.exit(ok ? 0 : 1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

