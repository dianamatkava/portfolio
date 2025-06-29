import { AnimatedLink } from "../shared/AnimatedLink";
import { socialLinks } from "@app/data/main";

export default function SocialMedias({
  colorClassName = "",
}: {
  colorClassName?: string;
}) {
  return (
    <div className="w-full inline-flex justify-start items-start gap-10">
      {socialLinks.map((social) => (
        <AnimatedLink
          key={social.name}
          href={social.url}
          target="_blank"
          lineHeight={1.5}
          rel="noopener noreferrer"
          className="inline-flex justify-start items-center gap-2 group"
        >
          <social.icon size={24} className={`text-white ${colorClassName}`} />
          <span className={`text-base text-white font-medium`}>
            {social.name}
          </span>
        </AnimatedLink>
      ))}
    </div>
  );
}
