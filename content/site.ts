/**
 * Personal site content — edit this file only.
 *
 * Anything in [square brackets] is a placeholder. Replace the brackets
 * and the example text with your own words, then leave the rest of the
 * codebase alone.
 *
 * After you change this file, the homepage, page title, and SEO tags
 * all update together.
 *
 * In `about` paragraphs you can add teal links with markdown:
 *   [label](https://example.com)
 *
 * `avatar` is the circular portrait in the sticky intro (`/public/avatar.png`).
 * `moments` is the hiking-photo grid; leave it empty until you add files
 * under `public/photos`.
 */

export type Experience = {
  /** Date range shown on the left, e.g. "2024 — Present" */
  period: string;
  /** Role title, e.g. "Software Engineer" */
  title: string;
  /** Company or team name */
  company: string;
  /** Optional previous titles at the same company */
  previousTitles?: readonly string[];
  /** Optional company / role URL. Leave empty to skip the external-link treatment. */
  href?: string;
  description: string;
  tags: readonly string[];
};

export type Project = {
  title: string;
  description: string;
  /** Optional project URL (repo, demo, or write-up). */
  href?: string;
  tags: readonly string[];
};

export type Link = {
  label: string;
  href: string;
};

export type Moment = {
  /** Public path, e.g. "/photos/hike.jpg" */
  src: string;
  alt: string;
  caption?: string;
};

export type Site = {
  name: string;
  /** Circular portrait in the sticky intro. File lives in /public. */
  avatar: string;
  role: string;
  tagline: string;
  about: readonly string[];
  experience: readonly Experience[];
  /** Shown under the experience list. Omit href to hide the row. */
  resume?: {
    label: string;
    href: string;
  };
  projects: readonly Project[];
  contact: {
    heading: string;
    body: string;
  };
  /** Hiking / life photos. Drop files in public/photos and list them here. */
  moments: readonly Moment[];
  links: readonly Link[];
  footer: string;
  seo: {
    description: string;
    siteUrl: string;
  };
};

export const site: Site = {
  // ---------------------------------------------------------------------------
  // Identity — left sticky column
  // ---------------------------------------------------------------------------
  name: "Jay Lee",
  /** Sticky-intro portrait. Cropped circular photo of the Brooklyn Bridge casual shot. */
  avatar: "/avatar.png",
  /** Short role line under your name */
  role: "[Software Engineer]",
  /** One sentence under the role. Keep it short enough to wrap to two lines. */
  tagline:
    "[A short line about what you build — accessible software, reliable systems, or the web.]",

  // ---------------------------------------------------------------------------
  // 01. About — 2–4 paragraphs. Use [label](url) for inline links.
  // ---------------------------------------------------------------------------
  about: [
    "[Hi — a couple of sentences about who you are as an engineer. What you like building, and the details you care about.]",
    "Currently you [do X at Company](https://example.com), working on [a product or platform](https://example.com). [A sentence on who you partner with and what you try to get right.]",
    "[Something human for the close. What you do away from the keyboard — a sport, a city, a hobby.]",
  ],

  // ---------------------------------------------------------------------------
  // 02. Experience — placeholder roles (replace with yours)
  // ---------------------------------------------------------------------------
  experience: [
    {
      period: "2024 — Present",
      title: "[Role title]",
      company: "[Company]",
      href: "https://example.com",
      description:
        "[What you own today. A few sentences on scope, the teams you work with, and a concrete outcome or two.]",
      tags: ["TypeScript", "React", "Next.js"],
    },
    {
      period: "2021 — 2024",
      title: "[Previous role]",
      company: "[Previous company]",
      previousTitles: ["[Earlier title at the same place]"],
      href: "https://example.com",
      description:
        "[What you built and shipped. Mention the kind of product, the stack, and how you worked with others.]",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      period: "2019 — 2021",
      title: "[Earlier role]",
      company: "[Earlier company]",
      href: "https://example.com",
      description:
        "[A shorter summary of an earlier chapter — what you learned or shipped there.]",
      tags: ["JavaScript", "HTML & CSS", "React"],
    },
  ],

  resume: {
    label: "View full résumé",
    href: "/[resume].pdf",
  },

  // ---------------------------------------------------------------------------
  // 03. Projects — placeholder cards (replace with yours)
  // ---------------------------------------------------------------------------
  projects: [
    {
      title: "[Featured project]",
      href: "https://github.com/[your-handle]/[repo]",
      description:
        "[What it is, who it’s for, and the interesting part of building it.]",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "[Another project]",
      href: "https://github.com/[your-handle]/[repo]",
      description:
        "[A tool, app, or experiment. One or two sentences on why it exists.]",
      tags: ["React", "Node.js"],
    },
    {
      title: "[A third project]",
      description:
        "[Leave href off until there’s a public link. A short note is enough.]",
      tags: ["Python", "SQLite"],
    },
  ],

  // ---------------------------------------------------------------------------
  // 04. Moments — hiking / life photos (add files under public/photos)
  // ---------------------------------------------------------------------------
  moments: [
    // { src: "/photos/hike.jpg", alt: "On the trail", caption: "Weekend hike" },
  ],

  // ---------------------------------------------------------------------------
  // 05. Contact
  // ---------------------------------------------------------------------------
  contact: {
    heading: "[What’s next?]",
    body: "[A short invite. Say you’re open to a note, a question, or a new project — then people will use the email link.]",
  },

  // ---------------------------------------------------------------------------
  // Social links — icons are chosen from the label (GitHub, LinkedIn, Email)
  // ---------------------------------------------------------------------------
  links: [
    { label: "GitHub", href: "https://github.com/[your-handle]" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/[your-handle]" },
    { label: "Email", href: "mailto:[your.email@example.com]" },
  ],

  // ---------------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------------
  footer: "[Designed & built by Jay Lee]",

  // ---------------------------------------------------------------------------
  // SEO — used for the browser tab and link previews
  // ---------------------------------------------------------------------------
  seo: {
    description:
      "[Software engineer. A one-sentence description for search and link previews.]",
    /**
     * Your live URL, used for canonical / Open Graph tags.
     * Replace with your Vercel domain after the first deploy.
     */
    siteUrl: "https://example.com",
  },
};
