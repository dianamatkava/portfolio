import { AnimatedLink } from "../shared/AnimatedLink";
import Button from "../shared/Button";
import { FlipTopText } from "../shared/animations/FlipTopText";
import Link from "next/link";
import Logo from "../shared/Logo";
import StatusBarge from "../shared/StatusBarge";

export default function HeaderNav() {
  return (
    <div className="w-full py-8 inline-flex justify-between items-center bg-black">
      {/* <div data-aos="fade-down" data-aos-delay="100">
        <StatusBarge />
      </div> */}

      <div className="w-fit inline-flex justify-start items-center gap-1.5 cursor-pointer group">
        <Logo />
      </div>
      <div
        className="w-fit mx-auto py-3 px-4 rounded-3xl inline-flex items-center gap-12"
        data-aos="fade-down"
      >
        <nav aria-label="Main site navigation">
          <ul className="flex gap-6 text-white text-md font-medium">
            {[
              { href: "/#about", label: "About" },
              { href: "/#projects", label: "Projects" },
              { href: "/#experience", label: "Experience" },
              { href: "/contacts", label: "Contact" },
            ].map(({ href, label }) => (
              <li
                key={href}
                className="flex items-center justify-center uppercase"
              >
                <AnimatedLink href={href}>{label}</AnimatedLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className="w-fit inline-flex items-center gap-3"
        data-aos="fade-down"
      >
        <Button title="Open CV" size="fit" color="white" />
        <Button title="Get in Touch" size="fit" color="black" />
      </div>
    </div>
  );
}
