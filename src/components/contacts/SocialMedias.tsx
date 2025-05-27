import Link from "next/link";
import { socialLinks } from "@app/data/main";

export default function SocialMedias() {
  return (
    <div className="w-full inline-flex justify-start items-start gap-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-start items-center gap-2"
        >
          <social.icon
            size={24}
            className="text-zinc-500 hover:text-zinc-400"
          />
          <span className="text-zinc-500 hover:text-zinc-400 font-medium">
            {social.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
