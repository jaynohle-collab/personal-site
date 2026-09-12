# Jay Lee — personal site

A small, personal profile page for [Jay Lee](https://github.com/jaynohle-collab). It is a **fill-in template**: the layout is finished, and every sentence on the page is a placeholder you can replace in one file.

This is not a resume. Career details stay on LinkedIn. This page is for a short about, what you’re into lately, notes, photos, and a few personal links.

## Edit your content

Open **`content/site.ts`**. That is the only file you need to change for copy, links, notes, photos, and SEO.

- Text in `[square brackets]` is a placeholder. Replace the brackets and the example words.
- `name`, `tagline`, and `about` are the header and intro.
- `now` is the “what I’m into lately” list (`label` + `text`).
- `notes` are the writing cards (`title`, `blurb`, `date`). Add `href` when a note has a URL.
- `photos` start as built-in drawings (`motif`). To use a real picture:
  1. Put the file in `public/photos/` (for example `public/photos/saturday.jpg`)
  2. Set `src: "/photos/saturday.jpg"` on that item
- `links` is the email / LinkedIn / GitHub row. Replace the `[your-handle]` pieces in each `href`.
- `seo.description` and `seo.siteUrl` set the browser tab and link-preview text. After you deploy, set `siteUrl` to your live Vercel URL.

Save the file. The homepage updates on the next refresh.

## Run locally

You need Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Deploy to Vercel

1. Push this repo to GitHub (already done if you’re on `jaynohle-collab/personal-site`).
2. In [Vercel](https://vercel.com), click **Add New… → Project** and import the repo.
3. Leave the defaults (Next.js is detected). Framework preset: Next.js. Build command: `next build`. Output: the default.
4. Deploy. On the first visit, confirm the page looks right on your phone and laptop.
5. Copy the deployment URL into `seo.siteUrl` in `content/site.ts`, commit, and redeploy so link previews use your real domain.

[Vercel’s Next.js deploy docs](https://nextjs.org/docs/app/getting-started/deploying) if you want more detail.

## What’s in the repo

```
content/site.ts          ← edit this
src/app/page.tsx         homepage
src/app/layout.tsx       fonts + SEO
src/components/          page layout and photo drawings
public/photos/           drop real photos here
```

No CMS, no login, no database.
