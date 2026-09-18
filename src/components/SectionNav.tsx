"use client";

import { useEffect, useState } from "react";

export type NavItem = {
  id: string;
  label: string;
};

export function SectionNav({ items }: { items: readonly NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.15, 0.4, 0.7, 1] },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="nav mt-16 hidden lg:block" aria-label="In-page">
      <ul className="w-max">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center py-3 ${
                  isActive ? "active" : ""
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                <span
                  className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                    isActive
                      ? "w-16 bg-snow"
                      : "w-8 bg-slate/50 group-hover:w-16 group-hover:bg-snow"
                  }`}
                />
                <span
                  className={`text-[13px] font-bold tracking-[0.14em] uppercase transition-colors ${
                    isActive
                      ? "text-snow"
                      : "text-slate group-hover:text-snow"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
