# Muhammad Fahad — Portfolio

Personal portfolio of Muhammad Fahad, AI Automation & Agentic AI Specialist.

Built with React, TypeScript, Vite, Tailwind CSS v4 and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open the link it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The finished site is written to the `dist/` folder.

## How to edit the site

| What you want to change | Where |
| --- | --- |
| Any text, links, email, WhatsApp, skills, projects, credentials | `src/data/portfolio.ts` |
| Your photo | Replace `public/fahad.webp` (keep the same name, or change `photo` in `src/data/portfolio.ts`) |
| Colors (light and dark mode) | Top of `src/index.css` (`:root` = light, `.dark` = dark) |
| Order of sections on the page | `src/App.tsx` |
| Layout of one section | `src/components/sections/<Section>.tsx` |

To add a project, skill group or credential, copy an existing item in
`src/data/portfolio.ts`, paste it below, and change the text. The page updates
automatically. Icons come from [lucide.dev/icons](https://lucide.dev/icons):
import the icon by name at the top of that file and use it as `icon: IconName`.

## Project structure

```text
public/
  fahad.webp              your photo
src/
  data/portfolio.ts       ALL site content
  index.css               colors, fonts, custom effects
  App.tsx                 section order
  hooks/useTheme.ts       light / dark mode
  components/
    Navbar.tsx  Footer.tsx  Loader.tsx  ScrollProgress.tsx  CustomCursor.tsx
    BlurFade.tsx  SectionLabel.tsx  BrandIcons.tsx
    sections/
      Hero.tsx  About.tsx  Skills.tsx  Projects.tsx  Credentials.tsx  Contact.tsx
```

## Note on the contact form

The form validates input and shows "Message sent", but it does not deliver
messages anywhere yet. To receive messages, connect a form service such as
Formspree in `src/components/sections/Contact.tsx` (see the `NOTE` comment).
