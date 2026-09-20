# Dr. Nasreen A. Sial — Portfolio Website

Single-page, mobile-first portfolio site for consultation enquiries. Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Deploys as static files (Netlify, Vercel, GitHub Pages, etc.).

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

The production output is in `dist/`.

## Editing content

**All copy, contact details, and lists** live in one file:

`src/content/siteContent.ts`

Update paragraphs, experience, courses, research, and contact links there. Layout components read from this file only.

## Professional title & AHPRA number

In `src/content/siteContent.ts`:

- **`PROFESSIONAL_TITLE`** — Shown in the hero, footer, and JSON-LD (default: `Doctor · Obstetrics & Gynaecology`). Do not use restricted specialist titles for Australian advertising unless appropriately registered and cleared.
- **`AHPRA_REGISTRATION_NO`** — Leave as an empty string `''` to hide. Set to the registration number when you want it shown in the footer.
- **`SHOW_CONTACT_SECTION`** — Set to `true` to show the “Get in touch” section and Contact nav link (default: `false`).

## Profile photo

Replace the files (keep the same paths):

- **Portrait:** `public/images/dr-sial-profile.png`
- **Logo / favicon:** `public/images/logo.png`

Alt text and paths are set in `siteMeta` inside `siteContent.ts`.

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io) with destination **drnasreensial@gmail.com**.
2. Copy the form ID from the endpoint (`https://formspree.io/f/YOUR_ID`).
3. In `src/content/siteContent.ts`, set:

   ```ts
   export const FORMSPREE_FORM_ID = 'YOUR_ID';
   ```

4. Rebuild and deploy.

If `FORMSPREE_FORM_ID` is empty, the form still validates input but **opens the visitor’s email app** (`mailto:`) on submit, with a notice on the form. WhatsApp and direct email buttons always work.

The form includes a honeypot field (`_gotcha`) for basic spam protection.

## Deploy

- **Vercel / Netlify:** Connect the repo; build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** Set `base` in `vite.config.ts` if using a project subpath (e.g. `/repo-name/`).

After deploy, update `canonical` and absolute `og:image` / `twitter:image` URLs in `index.html` to your live domain.

## Project structure

```
src/content/siteContent.ts   ← edit content here
src/components/              ← section UI
public/images/               ← profile photo
```

## Licence

Private client project — all rights reserved unless otherwise agreed.
