import { socials, type SocialId } from "@/data/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./SocialIcons";

const icons: Record<SocialId, typeof LinkedInIcon> = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

const tones = {
  light:
    "border-navy bg-navy text-cream hover:border-orange hover:bg-orange hover:text-navy hover:shadow-card",
  dark: "border-cream/20 text-cream/80 hover:border-mustard/60 hover:bg-cream/10 hover:text-cream",
} as const;

export default function SocialLinks({
  tone = "light",
  label,
  className = "",
}: {
  tone?: keyof typeof tones;
  /** Texto corto que antecede a los iconos; se omite si no se pasa. */
  label?: string;
  className?: string;
}) {
  const visible = socials.filter((social) => social.url.length > 0);
  if (!visible.length) return null;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {label ? (
        <span
          className={`label ${tone === "dark" ? "text-cream/40" : "text-navy"}`}
        >
          {label}
        </span>
      ) : null}

      <ul className="flex items-center gap-2.5">
        {visible.map((social) => {
          const Icon = icons[social.id];
          return (
            <li key={social.id}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${social.label} de Lissy Amador`}
                title={social.label}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ease-soft hover:-translate-y-0.5 ${tones[tone]}`}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
