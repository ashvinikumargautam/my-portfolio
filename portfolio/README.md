# Ashvini Kumar Gautam — Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS**, generated from resume content.

## Folder structure

```
portfolio/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ src/
│  ├─ main.jsx              # React entry point
│  ├─ App.jsx                # Assembles all sections
│  ├─ index.css              # Tailwind + custom utilities (reveal, hover cards)
│  ├─ data/
│  │  └─ resumeData.js       # All resume content (single source of truth)
│  ├─ hooks/
│  │  └─ useReveal.js        # IntersectionObserver scroll-reveal hook
│  └─ components/
│     ├─ BackgroundAnimation.jsx  # Ambient canvas node/network animation
│     ├─ Reveal.jsx               # Scroll-reveal wrapper component
│     ├─ Navbar.jsx
│     ├─ Hero.jsx
│     ├─ About.jsx
│     ├─ Skills.jsx
│     ├─ Experience.jsx
│     ├─ Projects.jsx
│     ├─ Education.jsx
│     ├─ Certifications.jsx
│     ├─ Contact.jsx
│     └─ Footer.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/` and can be deployed to any static host
(Netlify, Vercel, Cloudflare Pages, Render, GitHub Pages).

## Editing content

All resume text lives in `src/data/resumeData.js` — update your summary, skills,
experience, projects, education, and certifications there; every section
re-renders automatically.

## Notes

- Scroll-reveal is done with a small `IntersectionObserver` hook (`useReveal`) —
  no animation library required.
- Cards use the `.data-card` utility class (in `src/index.css`) for the light
  border + shadow-on-hover effect.
- The background animation is a lightweight `<canvas>` particle network
  (`BackgroundAnimation.jsx`) that respects `prefers-reduced-motion`.
