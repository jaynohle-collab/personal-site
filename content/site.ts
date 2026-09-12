/**
 * Personal site content — edit this file only.
 *
 * Anything in [square brackets] is a placeholder. Replace the brackets
 * and the example text with your own words, then leave the rest of the
 * codebase alone.
 *
 * After you change this file, the homepage, page title, and SEO tags
 * all update together.
 */

export type NowItem = {
  /** Small label on the left, e.g. "Reading" or "Cooking" */
  label: string;
  /** What you're into — keep it to one line if you can */
  text: string;
};

export type Note = {
  title: string;
  /** One-line blurb that sits under the title */
  blurb: string;
  /** Displayed as written, e.g. "Sep 2026" or "12 Sep 2026" */
  date: string;
  /** Optional. Leave empty until the note has a URL or /notes/slug page. */
  href?: string;
};

/**
 * Built-in illustration for the photo grid (no stock faces).
 * Swap `motif` for `src` when you have a real image in /public/photos.
 */
export type PhotoMotif =
  | "window"
  | "path"
  | "kitchen"
  | "desk"
  | "plant"
  | "evening";

export type Photo = {
  /** Shown under the image. Keep the [brackets] until you replace it. */
  caption: string;
  /** Use one of the built-in drawings while you collect real photos. */
  motif?: PhotoMotif;
  /**
   * Path under /public, e.g. "/photos/saturday.jpg".
   * When set, this is used instead of `motif`.
   */
  src?: string;
};

export type Link = {
  label: string;
  href: string;
};

export type Site = {
  name: string;
  tagline: string;
  about: readonly string[];
  now: readonly NowItem[];
  notes: readonly Note[];
  photos: readonly Photo[];
  links: readonly Link[];
  footer: string;
  seo: {
    description: string;
    siteUrl: string;
  };
};

export const site: Site = {
  // ---------------------------------------------------------------------------
  // Identity
  // ---------------------------------------------------------------------------
  name: "Jay Lee",
  /** One line under your name. Personal, not a job title. */
  tagline: "[A one-line personal tagline — how you want to be known]",

  // ---------------------------------------------------------------------------
  // About — 2–4 short paragraphs
  // ---------------------------------------------------------------------------
  about: [
    "[Your short bio. A couple of sentences about who you are outside of work — where you live, what you care about, how you like to spend a Sunday.]",
    "[Another sentence or two. A hobby, a place you keep going back to, or something you're learning just because it's fun.]",
  ],

  // ---------------------------------------------------------------------------
  // Now — what you're into lately (not a job update)
  // ---------------------------------------------------------------------------
  now: [
    { label: "Reading", text: "[A book, essay, or rabbit hole]" },
    { label: "Cooking", text: "[Something you're making at home]" },
    { label: "Listening", text: "[An album, playlist, or quiet habit]" },
    { label: "Wandering", text: "[A walk, a neighborhood, a small trip]" },
  ],

  // ---------------------------------------------------------------------------
  // Notes / writing — title + one-line blurb + date
  // ---------------------------------------------------------------------------
  notes: [
    {
      title: "[Note title — a small thought]",
      blurb: "[One line about what this note is.]",
      date: "Sep 2026",
    },
    {
      title: "[Another note title]",
      blurb: "[A sentence you'd tell a friend.]",
      date: "Aug 2026",
    },
    {
      title: "[A third placeholder note]",
      blurb: "[Replace this when you have something to share.]",
      date: "Jul 2026",
    },
  ],

  // ---------------------------------------------------------------------------
  // Photos / moments — captions + motif (or src when you have files)
  // Drop real images in /public/photos and set src: "/photos/your-file.jpg"
  // ---------------------------------------------------------------------------
  photos: [
    { caption: "[Morning light]", motif: "window" },
    { caption: "[A weekend walk]", motif: "path" },
    { caption: "[Something I cooked]", motif: "kitchen" },
    { caption: "[Desk, late afternoon]", motif: "desk" },
    { caption: "[A plant I'm keeping alive]", motif: "plant" },
    { caption: "[Evening, somewhere quiet]", motif: "evening" },
  ],

  // ---------------------------------------------------------------------------
  // Personal links — replace the [placeholders] in each href
  // ---------------------------------------------------------------------------
  links: [
    { label: "Email", href: "mailto:[your.email@example.com]" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/[your-handle]" },
    { label: "GitHub", href: "https://github.com/[your-handle]" },
  ],

  // ---------------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------------
  footer: "[A quiet closing line — or leave this and the year will still show.]",

  // ---------------------------------------------------------------------------
  // SEO — used for the browser tab and link previews
  // ---------------------------------------------------------------------------
  seo: {
    /** Short description for search results and social previews. */
    description:
      "[A short personal description for search and link previews — who you are, in one sentence.]",
    /**
     * Your live URL, used for canonical / Open Graph tags.
     * Replace with your Vercel domain after the first deploy.
     */
    siteUrl: "https://example.com",
  },
};
