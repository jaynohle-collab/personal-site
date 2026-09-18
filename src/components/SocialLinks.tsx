import { site } from "@content/site";
import { SocialIcon } from "@/components/icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`ml-1 flex items-center ${className}`} aria-label="Social">
      {site.links.map((link) => (
        <li key={link.label} className="mr-5 shrink-0">
          <a
            href={link.href}
            className="block text-slate transition-colors hover:text-snow"
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
            aria-label={link.label}
          >
            <SocialIcon label={link.label} className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
