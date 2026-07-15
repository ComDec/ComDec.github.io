# Xi Wang — Academic Homepage

Personal academic website for Xi Wang, built as a statically exported Next.js site and hosted on GitHub Pages.

The information architecture is inspired by [PRISM](https://github.com/xyjoey/PRISM), with a custom visual system and content model tailored to generative-model research.

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The static site is written to `out/`. Pushes to `master` deploy through `.github/workflows/deploy.yml`.

## Content

Academic content is maintained in `src/data/site.ts`:

- profile and research statement
- publications and selected publications
- news
- education and research experience

Static assets live in `public/`, including the profile image and CV PDF.
