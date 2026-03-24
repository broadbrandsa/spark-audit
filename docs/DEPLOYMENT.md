# Deployment

## GitHub Repository

Push the project to a GitHub repository for Vercel deployment.

```bash
cd spark-audit-site
git init
git add .
git commit -m "Initial commit: SPARK Schools Digital Mini-Audit site"
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Vercel Configuration

| Setting           | Value            |
| ----------------- | ---------------- |
| Framework Preset  | Next.js          |
| Output Directory  | (leave blank)    |
| Root Directory    | project root     |
| Install Command   | `pnpm install`   |
| Build Command     | `pnpm build`     |
| Node.js Version   | 18.x or 20.x    |

## Environment Variables

No environment variables are required. The site is entirely static with no external API calls.

## Build Verification

```bash
# Local build test
pnpm build

# Expected output:
# ✓ Compiled successfully
# Route (app)
# ○ /              (Static)
# ○ /_not-found    (Static)
```

## Custom Domain (Optional)

Configure a custom domain in Vercel dashboard under Project Settings → Domains.

## Notes

- No `vercel.json` is needed — defaults work correctly
- The site generates as fully static pages
- No server-side rendering or API routes are used
