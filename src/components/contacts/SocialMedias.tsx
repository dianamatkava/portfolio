import Link from "next/link";
import { socialLinks } from "@app/data/main";

export default function SocialMedias({
  colorClassName = "",
}: {
  colorClassName?: string;
}) {
  return (
    <div className="w-full inline-flex justify-start items-start gap-6">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-start items-center gap-2 group"
        >
          <social.icon
            size={24}
            className={`text-white group-hover:text-zinc-400 transition-all duration-300 ${colorClassName}`}
          />
          <span
            className={`text-base text-white group-hover:text-zinc-400 font-medium transition-all duration-300 ${colorClassName}`}
          >
            {social.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
