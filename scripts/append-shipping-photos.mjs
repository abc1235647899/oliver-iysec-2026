#!/usr/bin/env node
/**
 * Convert 5 additional PNG shipping photos to ~1600px long-side JPEGs in public/photos/shipping/.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'public', 'photos', 'shipping')
fs.mkdirSync(OUT_DIR, { recursive: true })

const inputs = [
  { src: '/home/ubuntu/.cursor/projects/workspace/uploads/07-interview-indoor_630a.png', out: '07-interview-indoor.jpg' },
  { src: '/home/ubuntu/.cursor/projects/workspace/uploads/08-interview-port-view_e415.png', out: '08-interview-port-view.jpg' },
  { src: '/home/ubuntu/.cursor/projects/workspace/uploads/09-interview-roc_bed7.png', out: '09-interview-roc.jpg' },
  { src: '/home/ubuntu/.cursor/projects/workspace/uploads/10-backdrop-trophy_b38d.png', out: '10-backdrop-trophy.jpg' },
  { src: '/home/ubuntu/.cursor/projects/workspace/uploads/11-photo-frame_7880.png', out: '11-photo-frame.jpg' },
]

async function convertOne(inp) {
  if (!fs.existsSync(inp.src)) {
    console.error('Missing input:', inp.src)
    return false
  }
  const outPath = path.join(OUT_DIR, inp.out)
  const img = sharp(inp.src).rotate()
  const meta = await img.metadata()
  const width = meta.width ?? 1600
  await img
    .resize({ width: Math.min(1600, width), height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(outPath)
  console.log('Wrote', path.relative(ROOT, outPath))
  return true
}

async function main() {
  let ok = true
  for (const it of inputs) {
    const res = await convertOne(it)
    ok = ok && res
  }
  process.exit(ok ? 0 : 1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

