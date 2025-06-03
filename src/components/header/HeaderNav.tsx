import CTA from "../shared/CTA";
import Logo from "../shared/Logo";
import StatusBarge from "../shared/StatusBarge";

export default function HeaderNav() {
  return (
    <div className="w-full py-8 inline-flex justify-between items-center bg-black">
      <StatusBarge />

      <div className="w-fit mx-auto py-3 px-4 rounded-3xl outline outline-1 outline-neutral-800 inline-flex items-center gap-12">
        <Logo />
        <nav aria-label="Main site navigation">
          <ul className="flex justify-start items-center gap-6 text-white text-sm font-medium">
            <li>
              <a
                href="#about"
                className="cursor-pointer hover:text-zinc-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="cursor-pointer hover:text-zinc-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="cursor-pointer hover:text-zinc-400 transition-colors duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="cursor-pointer hover:text-zinc-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="inline-flex items-center gap-3">
        <CTA title="Open CV" size="sm" color="white" />
        <CTA title="Get in Touch" size="sm" color="black" />
      </div>
    </div>
  );
}
