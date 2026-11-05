# Rodrigo · Portfolio

My personal portfolio website: projects, tech stack, education and contact, in a dark terminal style.

**Live site:** https://cyber-dragon-18.github.io

## Built with

- [Next.js](https://nextjs.org) (App Router) and [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via `next/font`
- Deployed to GitHub Pages with GitHub Actions, as a static export

## Features

- Two-column layout: a fixed intro column and a scrolling content column
- Project cards with a "show all" toggle, so the page stays short as the list grows
- Content kept separate from layout, so I edit one data file to update the site
- Terminal details: command-style headings, blinking cursor, and my name encoded as DNA bases
- Favicon, social preview image, custom 404 page, `robots.txt` and `sitemap.xml`

## Run it locally

You need Node.js 20.9 or later.

```bash
git clone git@github.com:Cyber-Dragon-18/Cyber-Dragon-18.github.io.git
cd Cyber-Dragon-18.github.io
npm install
npm run dev
```

Then open http://localhost:3000. The page updates when you save a file.

To build the static site into the `out/` folder:

```bash
npm run build
```

## Project structure

```
src/app/
├── page.js          the page layout and sections
├── data.js          all the content (about, projects, stack, education, links)
├── ProjectList.js   the project grid with the "show all" button
├── ProjectCard.js   one project card
├── Tags.js          the small tag labels
├── layout.js        fonts and site metadata
├── globals.css      colors and animations
├── not-found.js     the 404 page
├── icon.svg         favicon
└── opengraph-image.png   social preview image
public/
├── cv.pdf           CV, linked from the site
└── projects/        project screenshots
```

## Updating the content

- **Text and links:** edit `src/app/data.js`.
- **Add a project:** add an object to the `projects` array in `data.js`.
- **Add a screenshot:** put the image in `public/projects/` and add `image: "/projects/<file>.png"` to that project.
- **Colors:** change the variables at the top of `src/app/globals.css`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes the `out/` folder to GitHub Pages. In the repository settings, **Pages → Source** is set to **GitHub Actions**.

The Tailwind setup for Turbopack lives in `next.config.mjs`, together with the `output: "export"` setting that makes the site static.

## Contact

[GitHub](https://github.com/Cyber-Dragon-18) · [LinkedIn](https://www.linkedin.com/in/rodrigo-coelho-8b5222277/) · [Email](mailto:rodrimcoelho@gmail.com)