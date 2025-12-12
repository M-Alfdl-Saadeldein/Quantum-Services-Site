<!-- Copilot instructions for contributors and AI agents working on this repo -->
# Copilot / AI Agent Instructions — Quantum-Services-Site

Purpose: quick, actionable guidance so an AI coding agent is immediately productive in this static website repository.

- **Project type:** Single-page static website (HTML/CSS/JS). No build system, no package.json, deployed via Netlify using `netlify.toml` (publish = `.`).
- **Language & layout:** Arabic site; `index.html` includes `lang="ar"` and `dir="rtl"`. Preserve RTL layout when editing UI text or templates.

Key files to read first:
- `index.html` — the single page and source of truth for site structure, navigation and form markup.
- `contact.js` — contact form behavior and WhatsApp integration (phone number is hard-coded in this file).
- `style.css` — global styling; referenced in `index.html` as `css/style.css` but file currently at repository root as `style.css` (see "path conventions").
- `netlify.toml` — Netlify configuration; publish directory is `.` and there's a redirect to `index.html`.
- `assets/` — images and media (place static images here unless changing HTML paths).

Important, discoverable patterns and constraints:
- The contact form uses `onsubmit="sendWhatsApp(event)"` in `index.html`. The function `sendWhatsApp` in `contact.js` builds a `wa.me` URL and opens it in a new tab. The phone is set by the `whatsappNumber` constant in `contact.js`.
  - If you change the phone number, update `contact.js` only. Do not attempt to send server-side messages — the site intentionally uses client-side WhatsApp links.
- File path mismatches to notice and confirm before changing:
  - `index.html` references `css/style.css` and `js/contact.js`, but repository contains `style.css` and `contact.js` at the project root. When changing paths, either update the HTML references or relocate files into `css/` and `js/` directories. Keep changes minimal and consistent.
- Typography: `style.css` uses the `Cairo` font family but there is no `link` to Google Fonts in `index.html`. Avoid adding external network requests without asking; if you add fonts, document the change.
- Netlify: `netlify.toml` has `publish = "."` and no build command. Deploys expect static files at repository root (or update `publish` accordingly).

Developer workflows (what an AI agent may run or suggest):
- Local preview: this is a static site. Recommended commands (PowerShell) for quick preview:
  - `python -m http.server 8080` (run from project root)
  - or install `http-server` and run: `npx http-server -p 8080`.
- Deployment: repository is configured for Netlify. The repo can be connected to Netlify with default build settings; since `build.command` is empty, Netlify will simply publish the repo root.

Conventions and editing guidance for agents:
- Preserve `dir="rtl"` and Arabic text flows. When adding components or markup, prefer right-to-left layout and test with a local preview.
- Keep all user-facing copy inside `index.html` unless converting the project to a templating system — this repo is intentionally single-file for content.
- When modifying JavaScript behavior:
  - Update `contact.js` for contact-related logic only.
  - Keep `sendWhatsApp` client-side and ensure it still uses `encodeURIComponent` for message content.
- When adding or moving assets, update the HTML path references rather than duplicating assets.

Small examples (explicit, from repository):
- Contact number in `contact.js`:
  - `const whatsappNumber = "249905661400";` — change here to update recipient number.
- Contact form markup in `index.html`:
  - `<form id="contactForm" onsubmit="sendWhatsApp(event)">` — keep `id` and `onsubmit` if reworking behavior.
- Success message element:
  - `<div id="msg" class="success-msg">تم تجهيز الرسالة لواتساب…</div>` — CSS uses `.success-msg { display: none; }` to hide by default; JS toggles `style.display = 'block'`.

What NOT to do (avoid accidental disruptive changes):
- Do not introduce server-side dependencies or frameworks without explicit user approval — the repository is static by design.
- Do not change `netlify.toml.publish` without verifying deployment expectations.
- Avoid modifying Arabic copy or directionality unless the user requests content updates.

If you need to make larger changes (add build, convert to multi-page, add Node tooling):
- Open a PR and include a short migration plan: file moves (css/js), updated `netlify.toml` if `publish` changes, new build step, and local dev commands.

If any part of the project is unclear, ask the repo owner for:
- Preferred phone number for WhatsApp integration.
- Intention for asset layout (`css/` and `js/` directories vs root files).

---
Please review and tell me which areas you want expanded (examples, commands, or acceptance tests). I can iterate on this file.
