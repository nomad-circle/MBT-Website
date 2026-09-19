# MBT — Codex handoff

This package contains the complete source and assets of the deployed MBT website as of source revision a5c646d8533665d8a546123b8fe2423deb6127b1 (published version 10). It is a buildless static site; dist/ contains the actual authored website, not disposable build output.

## Local preview
From this folder, run:

    python3 -m http.server 8000 --directory dist

Open http://localhost:8000 and http://localhost:8000/?lang=ar. No npm install is required. Node is optional for syntax checks.

## Files to edit
- dist/content.js: interface text and team/contact configuration.
- build-content.py: content generator with owner-approved revisions near the end. Edit this when changing company prose, then run `python3 build-content.py` to regenerate dist/source-content.js. Editing only the generated file will be overwritten by later regeneration.
- dist/app.js: rendering and interactions.
- dist/style.css: responsive design and typography.
- dist/index.html: metadata, canonical URL, Open Graph and favicon references.
- dist/assets/: all images, logos, self-hosted fonts and font license.
- source/website-content.txt: historical transcription; later owner-approved changes take precedence.

## Existing hosting and domain
Production domain: https://mbt-saudi.com
Existing Sites URL: https://bmt-global.ar-d71.chatgpt.site
Existing project ID: appgprj_6aa1d117d5c48191af393d6053ff0964
The included .openai/hosting.json identifies that existing project and static directory.
Registrar: GoDaddy. DNS is managed in Cloudflare. Do not change nameservers, DNS, mailbox records or domain binding for ordinary website edits.

The ZIP is a source snapshot, not an authenticated publishing connection. It contains no credentials. Local edits do not automatically publish. GitHub is not required to edit locally and pushing to a new GitHub repository alone does not update this Site.

If this Codex environment has authenticated Sites capabilities for the owner, use its current Sites skills, resolve the existing project, and publish to that SAME project. Never create a replacement Site or assume that copying hosting.json grants permission. Obtain fresh credentials through the supported authenticated workflow; preserve the audience and custom domain. Follow the current source push, package, save and deploy process rather than inventing a CLI command.

If Sites publishing is unavailable on this device, complete and preview edits locally, return the updated project ZIP to the original ChatGPT conversation, and publish there to the same project. This preserves the existing domain without a hosting migration. Do not say changes are live until deployment succeeds.

## Inquiry status
Recipient: Mohammad@mbt-saudi.com.
Currently the validated form opens the visitor's email application with recipient, subject and form contents prefilled (mailto). The visitor must send from their email app. This is NOT server-side email delivery. inquiryEndpoint is intentionally empty. Do not claim delivery or configure an unapproved third-party form service. A direct-sending backend requires real provider configuration.

## Verification before handoff
Check both languages, original 13-section order, local asset paths, internal anchors, mobile/tablet layouts and keyboard navigation. Preserve text when switching languages and keep the reader near the same section. Check JS syntax with `node --check dist/app.js` and `node --check dist/content.js` when Node is available. All four team portrait slots remain placeholders until actual photos are supplied.
