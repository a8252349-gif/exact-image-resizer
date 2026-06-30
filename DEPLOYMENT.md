# Deployment Guide

## 1. Upload to GitHub

```bash
git init
git add .
git commit -m "Initial Image Resizer release"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Do not commit `.env.local`. Commit `.env.example` only.

## 2. Create a Render Static Site

1. In Render, choose **New → Static Site**.
2. Connect the GitHub repository.
3. Set the branch to `main`.
4. Use these values:

```text
Build Command: npm ci && npm run build
Publish Directory: out
```

The included `render.yaml` contains the same static-site configuration.

## 3. Set build-time environment variables

At minimum:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_CONTACT_EMAIL=contact@your-domain.example
```

For the approval-stage advertising state, keep:

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-9328837907414732
NEXT_PUBLIC_ADSENSE_SCRIPT_ENABLED=false
NEXT_PUBLIC_ADSENSE_MANUAL_ADS_ENABLED=false
NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS=false
NEXT_PUBLIC_GOOGLE_CMP_ENABLED=false
```

Every `NEXT_PUBLIC_` value is compiled into the static export. Trigger a new deployment after changing one.

## 4. Connect a custom domain

1. Add the custom domain in Render.
2. Render will show the required DNS record.
3. In Cloudflare DNS, create the supplied CNAME or A/AAAA record.
4. For initial validation, use **DNS only** if proxying causes ownership or SSL validation delays.
5. After Render confirms the domain and certificate, Cloudflare proxying can be enabled if desired.
6. Keep SSL/TLS mode at **Full (strict)** once both sides have valid certificates.

## 5. Verify after deployment

Replace the example host below with the production domain:

```text
/
/en/
/ko/
/ja/
/es/
/en/resizer/
/en/guides/
/en/resources/
/ads.txt
/robots.txt
/sitemap.xml
/sitemap.txt
/feed.xml
/atom.xml
```

Also inspect page source for:

- a self-referencing canonical;
- `en`, `ko`, `ja`, `es`, and `x-default` hreflang links;
- the `google-adsense-account` meta tag;
- no AdSense script while approval-stage flags are false;
- no empty ad box or placeholder;
- correct Open Graph URLs using the production domain.

## 6. Cloudflare notes

- Do not cache HTML indefinitely while changing environment variables or metadata.
- Do not block `/_next/`, JavaScript, CSS, SVG, feeds, or sitemap files in robots rules.
- If Cloudflare modifies HTML or scripts, test the editor after enabling each optimization.
- Avoid automatic JavaScript deferral features that can interfere with Web Workers or Blob downloads unless tested.

## 7. Rollback

Render keeps deployment history. If a build or environment change is incorrect, restore the prior successful deployment and then correct the repository or environment variables before rebuilding.
