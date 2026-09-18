# Jay Lee — personal site

A one-page developer portfolio for [Jay Lee](https://github.com/jaynohle-collab), in a dark two-column layout (sticky intro on the left, scrolling sections on the right). It is a **fill-in template**: the layout is finished, and every sentence on the page is a placeholder you can replace in one file.

## Edit your content

Open **`content/site.ts`**. That is the only file you need to change for copy, links, roles, projects, and SEO.

- Text in `[square brackets]` is a placeholder. Replace the brackets and the example words.
- `name`, `role`, and `tagline` are the left column (the sticky intro on desktop).
- `about` is 2–4 paragraphs. Inline links use markdown: `[label](https://example.com)`.
- `experience` is the role list (`period`, `title`, `company`, `description`, `tags`, optional `href` and `previousTitles`).
- `resume` is the “View full résumé” row under experience. Point `href` at a PDF in `/public`, or remove the object to hide it.
- `projects` are the project cards (`title`, `description`, `tags`, optional `href`).
- `contact` is the closing invite (`heading` + `body`). The “Say hello” button uses the Email entry in `links`.
- `links` is GitHub / LinkedIn / Email. Icons are chosen from the label. Replace the `[your-handle]` pieces in each `href`.
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
src/components/          page layout, nav, cards
public/                  optional résumé PDF, images
```

No CMS, no login, no database.
