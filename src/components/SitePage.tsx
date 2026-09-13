import type { ReactNode } from "react";
import Image from "next/image";
import { site } from "@content/site";
import { PhotoMotif } from "@/components/PhotoMotif";

export function SitePage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-full">
      <main className="site-stack mx-auto w-full max-w-[720px] px-6 pb-8 pt-16 sm:px-8 sm:pt-24">
        <header className="fade-in">
          <p className="font-serif text-[13px] tracking-[0.18em] text-ink-soft uppercase">
            A personal page
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-none tracking-[-0.02em] text-ink sm:text-[56px]">
            {site.name}
          </h1>
          <p className="mt-4 max-w-[40rem] font-serif text-xl leading-8 text-ink-muted italic sm:text-[22px] sm:leading-9">
            {site.tagline}
          </p>
        </header>

        <Section id="about" label="About">
          <div className="flex flex-col gap-4">
            {site.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-8 text-ink/90 sm:text-[18px] sm:leading-[1.75]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section id="now" label="Now">
          <ul className="flex flex-col gap-3">
            {site.now.map((item) => (
              <li
                key={item.label}
                className="grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-4 sm:grid-cols-[112px_minmax(0,1fr)]"
              >
                <span className="text-[13px] font-medium tracking-wide text-accent">
                  {item.label}
                </span>
                <span className="text-[17px] leading-7 text-ink">{item.text}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="notes" label="Notes">
          <ul className="flex flex-col gap-4">
            {site.notes.map((note) => {
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-serif text-xl leading-7 text-ink">{note.title}</h3>
                    <time className="shrink-0 text-[13px] tracking-wide text-ink-soft">
                      {note.date}
                    </time>
                  </div>
                  <p className="mt-2 text-[16px] leading-7 text-ink-muted">{note.blurb}</p>
                </>
              );

              return (
                <li key={`${note.title}-${note.date}`}>
                  {note.href ? (
                    <a
                      href={note.href}
                      className="block rounded-sm border border-line bg-paper-raised px-5 py-4 transition-colors hover:border-accent/35"
                    >
                      {inner}
                    </a>
                  ) : (
                    <article className="rounded-sm border border-line bg-paper-raised px-5 py-4">
                      {inner}
                    </article>
                  )}
                </li>
              );
            })}
          </ul>
        </Section>

        <Section id="photos" label="Moments">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {site.photos.map((photo) => (
              <li key={photo.caption} className="min-w-0">
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-[#ddd4c5]">
                    {photo.src ? (
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes="(min-width: 640px) 220px, 45vw"
                        className="object-cover"
                      />
                    ) : (
                      <PhotoMotif
                        motif={photo.motif ?? "window"}
                        title={photo.caption}
                      />
                    )}
                  </div>
                  <figcaption className="mt-2 text-[13px] leading-5 text-ink-muted">
                    {photo.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="links" label="Links">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {site.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[17px] text-ink underline decoration-line underline-offset-[5px] transition-colors hover:decoration-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <footer className="fade-in border-t border-line pt-8 pb-16 text-[13px] leading-6 text-ink-soft">
          <p>
            © {year} {site.name}
            {site.footer ? <span className="mt-1 block">{site.footer}</span> : null}
          </p>
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="fade-in border-t border-line pt-12">
      <h2 className="mb-5 font-sans text-[12px] font-medium tracking-[0.18em] text-ink-soft uppercase">
        {label}
      </h2>
      {children}
    </section>
  );
}
