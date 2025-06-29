import { AnimatedLink } from "../shared/AnimatedLink";
import Button from "../shared/Button";
import DelimiterLine from "../shared/DelimiterLine";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import SocialMedias from "../contacts/SocialMedias";

export default function Footer() {
  return (
    <>
      <div className="w-full space-y-12 container pt-24">
        <FooterTopBar />
        <DelimiterLine />
        <FooterMiddleBar />
        <DelimiterLine />
        <FooterPrivacyPolicy />
      </div>
      <MovingText text="DIANAMATKAVA" />
    </>
  );
}

function FooterTopBar() {
  return (
    <>
      <h2
        className="flex flex-col justify-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span className="text-white text-7xl font-semibold">Let's build</span>
        <span className="text-neutral-500/50 text-7xl font-semibold">
          Incredible apps together.
        </span>
      </h2>

      <div
        className="w-full inline-flex justify-between items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-zinc-500 text-sm">Email:</div>
          <AnimatedLink
            href="mailto:diana@matkava.com"
            className="justify-start text-white text-base font-semibold transition-all duration-300"
          >
            diana@matkava.com
          </AnimatedLink>
        </div>

        <div
          className="inline-flex flex-col justify-start items-start gap-2.5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="justify-start text-zinc-500 text-sm">Contact Me:</div>
          <AnimatedLink
            href="#contact"
            className="justify-start text-base text-white whitespace-nowrap font-semibold underline uppercase transition-all duration-300"
          >
            Contact Now
          </AnimatedLink>
        </div>

        <div
          className="inline-flex flex-col justify-start items-start gap-2.5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="justify-start text-zinc-500 text-sm">Social:</div>
          <SocialMedias />
        </div>
      </div>
    </>
  );
}
function FooterMiddleBar() {
  return (
    <div
      className="w-full inline-flex justify-between items-center"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <SubscribeForm />
      <FooterPageLinks />
    </div>
  );
}

function SubscribeForm() {
  return (
    <div
      className="w-full flex flex-col justify-center items-start gap-6 max-w-96"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h3 className="text-zinc-100 text-3xl font-semibold">
        Subscribe for unique updates:
      </h3>
      <form className="w-full inline-flex justify-start items-start gap-2">
        <input
          placeholder="Email"
          className="w-full min-w-60 text-base h-10 px-4 py-3 bg-transparent rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-neutral-500 inline-flex justify-start items-center overflow-hidden"
        />
        <Button title="Submit" size="fit" color="white" type="submit">
          <FaPlay />
        </Button>
      </form>
    </div>
  );
}

function FooterPageLinks() {
  return (
    <nav
      aria-labelledby="page-links"
      className="w-full max-w-[336px]"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h2 id="page-links" className="text-2xl font-semibold text-white mb-6">
        Page Links
      </h2>

      <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-base text-zinc-500 w-md">
        <li>
          <AnimatedLink href="/" className="hover:text-white transition">
            Home
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            href="/experience"
            className="hover:text-white transition"
          >
            Experience
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/about" className="hover:text-white transition">
            About
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/contact" className="hover:text-white transition">
            Contact
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            href="/projects"
            className="hover:text-white transition"
          >
            Projects
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            href="/cv.pdf"
            className="hover:text-white transition"
            rel="noopener"
            target="_blank"
          >
            View CV
          </AnimatedLink>
        </li>
      </ul>
    </nav>
  );
}

function FooterPrivacyPolicy() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
      {/* Left block: location + any footer links */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-20">
        {/* Location */}
        <address className="w-md not-italic flex items-center text-base text-zinc-500 font-medium">
          <span className="justify-start text-zinc-500 text-sm whitespace-nowrap">
            Based in:
          </span>
          <span className="ml-2 text-base text-white font-bold whitespace-nowrap">
            Berlin, DEU
          </span>
        </address>

        {/* Footer links (legal, social, whatever) */}
        <ul className="w-fit flex items-center gap-4 text-base text-white font-semibold">
          <li>
            <AnimatedLink
              href="/terms-of-service"
              className="hover:underline whitespace-nowrap"
            >
              Terms of Service
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink
              href="/privacy-policy"
              className="hover:underline whitespace-nowrap"
            >
              Privacy Policy
            </AnimatedLink>
          </li>
        </ul>
      </div>

      {/* Right block: copyright */}
      <p className="w-md text-zinc-500 text-sm whitespace-nowrap">
        &copy; 2025 Diana Matkava | All Rights Reserved
      </p>
    </div>
  );
}

function MovingText({
  direction = "left",
  text = "",
  textStyle = "",
}: {
  direction?: string;
  text?: string;
  textStyle?: string;
}) {
  return (
    // 1) make this exactly half the text-size, and hide overflow
    <div
      className="w-full h-[217px] overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
      role="presentation"
    >
      {/* 2) your existing scrolling text */}
      <div
        className={`flex w-max text-[350px] leading-[1] font-extrabold text-white whitespace-nowrap ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <span key={index} className={textStyle}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
