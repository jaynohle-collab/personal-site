import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@content/site";
import { ArrowUpRight } from "@/components/icons";
import { ExperienceCard, ProjectCard } from "@/components/Cards";
import { RichText } from "@/components/RichText";
import { SectionNav } from "@/components/SectionNav";
import { SocialLinks } from "@/components/SocialLinks";
import { Spotlight } from "@/components/Spotlight";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "moments", label: "Moments" },
  { id: "contact", label: "Contact" },
] as const;

const emailHref =
  site.links.find((link) => link.label.toLowerCase() === "email")?.href ??
  "mailto:[your.email@example.com]";

export function SitePage() {
  const year = new Date().getFullYear();

  return (
    <div className="relative">
      <Spotlight />
      <a
        href="#content"
        className="bg-navy text-accent sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="flex items-center gap-5">
                <Image
                  src={site.avatar}
                  alt={`${site.name} — casual portrait in Brooklyn`}
                  width={128}
                  height={128}
                  priority
                  className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-navy-lightest sm:h-24 sm:w-24 lg:h-28 lg:w-28"
                />
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-snow sm:text-5xl">
                    <Link href="/">{site.name}</Link>
                  </h1>
                  <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-lightest sm:text-xl">
                    {site.role}
                  </h2>
                </div>
              </div>
              <p className="mt-4 max-w-xs leading-normal text-slate">
                {site.tagline}
              </p>
              <SectionNav items={NAV} />
            </div>
            <SocialLinks className="mt-8 lg:mt-0" />
          </header>

          <main
            id="content"
            className="pt-16 outline-none lg:w-[52%] lg:py-24"
            tabIndex={-1}
          >
            <Section id="about" index="01" label="About">
              <div className="space-y-4">
                {site.about.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[16px] leading-7 text-slate"
                  >
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            </Section>

            <Section id="experience" index="02" label="Experience">
              <ol className="group/list">
                {site.experience.map((item) => (
                  <li key={`${item.company}-${item.period}`} className="mb-12">
                    <ExperienceCard item={item} />
                  </li>
                ))}
              </ol>
              {site.resume?.href ? (
                <div className="mt-12">
                  <a
                    className="group/link inline-flex items-center font-medium leading-tight text-slate-lightest hover:text-accent focus-visible:text-accent"
                    href={site.resume.href}
                  >
                    <span>
                      {site.resume.label}
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </a>
                </div>
              ) : null}
            </Section>

            <Section id="projects" index="03" label="Projects">
              <ul>
                {site.projects.map((item) => (
                  <li key={item.title} className="mb-12">
                    <ProjectCard item={item} />
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="moments" index="04" label="Moments">
              {site.moments.length > 0 ? (
                <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5">
                  {site.moments.map((moment) => (
                    <li key={moment.src}>
                      <figure className="group">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy-light ring-1 ring-navy-lightest transition-[box-shadow,ring-color] duration-300 group-hover:ring-slate/25 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.12)]">
                          <Image
                            src={moment.src}
                            alt={moment.alt}
                            fill
                            sizes="(min-width: 1024px) 20vw, 45vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                            style={
                              moment.position
                                ? { objectPosition: moment.position }
                                : undefined
                            }
                          />
                        </div>
                        {moment.caption ? (
                          <figcaption className="mt-2.5 text-[13px] leading-normal text-slate">
                            {moment.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <p className="text-[16px] leading-7 text-slate">
                    Hiking photos — coming soon.
                  </p>
                  <ul className="mt-6 grid grid-cols-2 gap-4" aria-hidden="true">
                    {["Trail photo", "Summit photo"].map((label) => (
                      <li
                        key={label}
                        className="flex aspect-[4/5] items-end rounded-md border border-dashed border-navy-lightest bg-navy-light/50 p-3"
                      >
                        <span className="font-mono text-[11px] tracking-wide text-slate/70 uppercase">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Section>

            <Section id="contact" index="05" label="Contact">
              <h3 className="text-xl font-semibold tracking-tight text-snow">
                {site.contact.heading}
              </h3>
              <p className="mt-4 max-w-md text-[16px] leading-7 text-slate">
                <RichText text={site.contact.body} />
              </p>
              <a
                href={emailHref}
                className="mt-8 inline-block rounded border border-accent px-7 py-3.5 font-mono text-sm text-accent transition-colors hover:bg-accent-tint"
              >
                Say hello
              </a>
            </Section>

            <footer className="max-w-md pt-16 pb-16 text-[13px] leading-6 text-slate/80 lg:pb-0">
              <p>
                © {year} {site.name}
                {site.footer ? <span className="mt-1 block">{site.footer}</span> : null}
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  index,
  label,
  children,
}: {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-navy/85 px-6 py-5 backdrop-blur lg:static lg:z-auto lg:mx-0 lg:mb-8 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <h2
          id={`${id}-heading`}
          className="flex items-baseline gap-3 text-sm font-bold tracking-[0.14em] text-snow uppercase"
        >
          <span className="font-mono text-[13px] font-normal tracking-widest text-accent">
            {index}.
          </span>
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}
