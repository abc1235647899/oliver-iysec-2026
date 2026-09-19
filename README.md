# Oliver Chung Yu Tong · IYSEC 2026 Celebration Site

Bilingual (EN | 繁中) celebration website for **Oliver Chung Yu Tong (鍾渝棠)** and his seven awards at the **Sun Hung Kai Properties International Youth STEAM Education Competition (IYSEC 2026)** / **新鴻基地產國際青少年創科教育大賽**.

Built with **Vite + React + TypeScript + Framer Motion**. Dark neon / glassmorphism UI, particle background, phone-first layout, and `prefers-reduced-motion` support.

## Subject

| | EN | 繁中 |
|---|----|------|
| Name | Oliver Chung Yu Tong | 鍾渝棠 |
| Age / Grade | 10 · Primary 6 | 10 歲 · 小六 |
| School | PLK Fung Ching Memorial Primary School | 保良局馮晴紀念小學 |
| Event | IYSEC 2026 | 新鴻基地產國際青少年創科教育大賽 |

## Develop

```bash
cd site
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Language preference is stored in `localStorage` under `oliver-iysec-lang`.

## Build

```bash
npm run build
```

Output lands in `dist/`.

## Preview production build

```bash
npm run preview
```

## Deploy

### Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set **Root Directory** to `site` (if the repo root is the parent folder).
4. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.
5. Deploy.

Or from this folder:

```bash
npx vercel
```

### GitHub Pages

`vite.config.ts` uses `base: './'` so relative asset paths work on project pages.

1. Build: `npm run build`
2. Publish the `dist/` folder to the `gh-pages` branch, or use GitHub Actions.

Example Action (place at `.github/workflows/pages.yml` in the repo root, adjust paths if needed):

```yaml
name: Deploy GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
          cache-dependency-path: site/package-lock.json
      - run: npm ci
        working-directory: site
      - run: npm run build
        working-directory: site
      - uses: actions/upload-pages-artifact@v3
        with:
          path: site/dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Enable **Settings → Pages → Source: GitHub Actions**.

## Photos

Photos live in `public/photos/` (copied from `../media/`). Filenames match `../AWARDS.md`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Oxlint |
