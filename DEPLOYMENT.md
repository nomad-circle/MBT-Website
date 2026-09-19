# MBT deployment

Cloudflare Pages is the deployment target authorized by the owner on 2026-09-19. This supersedes the Sites-only publishing instructions in README.md and AGENTS.md. The old Sites project is retained for rollback; do not delete it.

- GitHub repository: nomad-circle/MBT-Website
- Cloudflare Pages project: mbt-website
- Production branch: main
- Automatic deployments: enabled for commits to main
- Framework preset: None
- Build command: exit 0
- Output directory: dist
- Root directory: repository root
- Preview URL: https://mbt-website-98i.pages.dev
- Production domain: https://mbt-saudi.com

The site is buildless: dist contains authored HTML, CSS, JavaScript, images and fonts. No npm installation is required. When company prose changes, edit build-content.py, run it with a current Python 3 interpreter, and commit the regenerated dist/source-content.js along with the generator changes.

Before pushing, check JavaScript syntax and preview both languages using python3 -m http.server 8000 --directory dist. Preserve the 13 sections, branding, RTL layout and inquiry drafts on language changes. The inquiry form still opens the visitor email application; it is not server-side delivery.

For normal website updates, commit the changed source to main; Cloudflare automatically deploys it. Check the successful deployment and site before announcing completion. No DNS changes are needed for subsequent content updates.

Keep MX, TXT, mail-related CNAME/SRV records, and the existing jamie.ns.cloudflare.com / ned.ns.cloudflare.com nameservers unchanged. The legacy .openai/hosting.json is retained as historical rollback information and is not used by Cloudflare Pages.
