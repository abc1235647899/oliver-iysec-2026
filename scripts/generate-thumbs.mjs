#!/usr/bin/env node
/**
 * Generate preview thumbnails (~640px long side) for all images under public/photos/
 * Outputs JPEG (q=75) and WebP (q=75) into public/thumbs/ preserving directory structure.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const PHOTOS_DIR = path.join(ROOT, 'public', 'photos')
const THUMBS_DIR = path.join(ROOT, 'public', 'thumbs')

/** Recursively walk a directory and return files */
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function isImageFile(file) {
  return /\.(jpe?g|png)$/i.test(file)
}

function relFromPhotos(abs) {
  return path.relative(PHOTOS_DIR, abs)
}

async function processOne(absIn) {
  const rel = relFromPhotos(absIn)
  const outBase = path.join(THUMBS_DIR, rel).replace(/\.[^.]+$/i, '')
  ensureDir(path.dirname(outBase))

  const jpgOut = `${outBase}.jpg`
  const webpOut = `${outBase}.webp`

  // Skip if both outputs exist and are newer than input
  const inStat = fs.statSync(absIn)
  const needsJpg =
    !fs.existsSync(jpgOut) || fs.statSync(jpgOut).mtimeMs < inStat.mtimeMs
  const needsWebp =
    !fs.existsSync(webpOut) || fs.statSync(webpOut).mtimeMs < inStat.mtimeMs
  if (!needsJpg && !needsWebp) return { rel, skipped: true }

  const img = sharp(absIn).rotate() // auto-orient based on EXIF
  const resized = img.resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true })
  if (needsJpg) {
    await resized.clone().jpeg({ quality: 75, progressive: true, mozjpeg: true }).toFile(jpgOut)
  }
  if (needsWebp) {
    await resized.clone().webp({ quality: 75 }).toFile(webpOut)
  }
  return { rel, skipped: false }
}

async function main() {
  if (!fs.existsSync(PHOTOS_DIR)) {
    console.error('No public/photos directory found; nothing to do.')
    process.exit(0)
  }
  const files = walk(PHOTOS_DIR).filter(isImageFile)
  let done = 0
  let skipped = 0
  await Promise.all(
    files.map(async (f) => {
      try {
        const res = await processOne(f)
        done += res.skipped ? 0 : 1
        skipped += res.skipped ? 1 : 0
      } catch (e) {
        console.error('Failed to process', f, e)
      }
    }),
  )
  console.log(`Thumbnails generated: ${done}, up-to-date: ${skipped}, total: ${files.length}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

