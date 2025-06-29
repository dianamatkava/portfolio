import { AnimatedLink } from "../shared/AnimatedLink";
import Button from "../shared/Button";
import { FlipTopText } from "../shared/animations/FlipTopText";
import Link from "next/link";
import Logo from "../shared/Logo";
import StatusBarge from "../shared/StatusBarge";

export default function HeaderNav() {
  return (
    <div className="w-full py-8 inline-flex justify-between items-center bg-black">
      <StatusBarge />

      <div className="w-fit mx-auto py-3 px-4 rounded-3xl outline outline-1 outline-neutral-800 inline-flex items-center gap-12">
        <Logo />
        <nav aria-label="Main site navigation">
          <ul className="flex gap-6 text-white text-sm font-medium">
            {[
              { href: "/#about", label: "About" },
              { href: "/#projects", label: "Projects" },
              { href: "/#experience", label: "Experience" },
              { href: "/contacts", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href} className="flex items-center justify-center">
                <AnimatedLink href={href} lineHeight={1.25}>
                  {label}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="inline-flex items-center gap-3">
        <Button title="Open CV" size="fit" color="white" />
        <Button title="Get in Touch" size="fit" color="black" />
      </div>
    </div>
  );
}
