#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'public', 'photos', 'shipping', '12-stage-winners-group.jpg')
const SRC = '/home/ubuntu/.cursor/projects/workspace/uploads/12-stage-winners-group_225e.png'

fs.mkdirSync(path.dirname(OUT), { recursive: true })

async function main() {
  if (!fs.existsSync(SRC)) {
    console.error('Missing input:', SRC)
    process.exit(1)
  }
  const img = sharp(SRC).rotate()
  const meta = await img.metadata()
  const width = meta.width ?? 1600
  await img
    .resize({ width: Math.min(1600, width), height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(OUT)
  console.log('Wrote', OUT)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

