import type { Experience, Project } from "@content/site";
import { ArrowUpRight } from "@/components/icons";

export function TechTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies">
      {tags.map((tag) => (
        <li key={tag} className="mt-2 mr-1.5">
          <div className="flex items-center rounded-full border border-accent/30 bg-accent-tint px-3 py-1 text-xs font-medium leading-5 text-accent">
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ExperienceCard({ item }: { item: Experience }) {
  const heading = (
    <>
      <span>
        {item.title} ·{" "}
        <span className="inline-block">
          {item.company}
          {item.href ? (
            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
          ) : null}
        </span>
      </span>
    </>
  );

  return (
    <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
      <header className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate uppercase sm:col-span-2">
        {item.period}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-lightest">
          {item.href ? (
            <a
              className="group/link inline-flex items-baseline text-[16px] leading-snug text-slate-lightest hover:text-accent focus-visible:text-accent"
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              {heading}
            </a>
          ) : (
            <span className="text-[16px] leading-snug">{heading}</span>
          )}
        </h3>
        {item.previousTitles?.map((title) => (
          <p
            key={title}
            className="text-[15px] leading-normal font-medium text-slate"
          >
            {title}
          </p>
        ))}
        <p className="mt-2 text-sm leading-normal text-slate">{item.description}</p>
        <TechTags tags={item.tags} />
      </div>
    </div>
  );
}

export function ProjectCard({ item }: { item: Project }) {
  const heading = (
    <span className="inline-block">
      {item.title}
      {item.href ? (
        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
      ) : null}
    </span>
  );

  return (
    <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-4 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
      <div className="z-10 sm:col-span-8">
        <h3 className="font-medium leading-snug text-slate-lightest">
          {item.href ? (
            <a
              className="group/link inline-flex items-baseline text-[16px] leading-snug text-slate-lightest hover:text-accent focus-visible:text-accent"
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              {heading}
            </a>
          ) : (
            <span className="text-[16px] leading-snug">{heading}</span>
          )}
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate">{item.description}</p>
        <TechTags tags={item.tags} />
      </div>
    </div>
  );
}
