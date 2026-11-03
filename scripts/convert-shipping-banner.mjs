#!/usr/bin/env node
/**
 * Convert the uploaded shipping banner PNG to an optimized JPEG in public/coming-soon/.
 * Attempts to trim a solid outer margin without cropping artwork.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const SRC_CANDIDATES = [
  '/home/ubuntu/.cursor/projects/workspace/uploads/shipping-banner_95bf.png',
  path.join(ROOT, 'coming', 'shipping-banner.png'),
]
const OUT_DIR = path.join(ROOT, 'public', 'coming-soon')
const OUT_FILE = path.join(OUT_DIR, 'shipping-banner.jpg')

fs.mkdirSync(OUT_DIR, { recursive: true })

function findSrc() {
  for (const p of SRC_CANDIDATES) {
    if (fs.existsSync(p)) return p
  }
  return null
}

async function main() {
  const src = findSrc()
  if (!src) {
    console.error('No shipping banner source image found.')
    process.exit(1)
  }
  const img = sharp(src)
  const meta = await img.metadata()
  const width = meta.width ?? 1024
  // Keep original aspect; limit width to ~1600px if larger, else keep as-is
  const resize = img.resize({
    width: Math.min(1600, width),
    withoutEnlargement: true,
  })
  await resize.jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(OUT_FILE)
  console.log('Wrote', path.relative(ROOT, OUT_FILE))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

