# Glass Mirror

Source code for my personal website, **[jychpr.dev](https://jychpr.dev)**.

The site has two sides on one domain: **Pro** (projects, technical blog, TILs, CV and resume) and **Fun** (gaming, content and random posts), switched from the header.

## Stack

- [Astro](https://astro.build) 7, built as a static site, with posts in Markdown
- Raw CSS with CSS variables for light and dark mode
- GitHub Pages, deployed by GitHub Actions on every push to `main`
- Cloudflare for the domain and DNS

## Run locally

Use Node 22.12 or newer.

```sh
npm ci            # install the exact dependency versions
npm run dev       # dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Project layout

| Path | Contents |
| --- | --- |
| `src/pages/` | Every file here is a page on the site |
| `src/pages/posts/` | Projects, blog posts and TILs, in Markdown |
| `src/pages/cv.astro`, `src/pages/resume.astro` | CV and resume, each in English and Chinese |
| `src/layouts/CVLayout.astro` | Shared A4 screen and print styles for the CV and resume |
| `src/components/Header.astro` | Navigation and the Pro/Fun switch |
| `public/` | Images and other static files, served as-is |

The CV and resume print to A4 PDFs straight from the browser with their "Save as PDF / Print" button. The resume is one page per language.

How the site was built: see its [project page](https://jychpr.dev/posts/pro-projects/project-glass-mirror/).