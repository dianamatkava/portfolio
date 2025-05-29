import CTA from "../shared/CTA";
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
      <h2 className="flex flex-col justify-start">
        <span className="text-white text-7xl font-semibold">Let's build</span>
        <span className="text-neutral-500/50 text-7xl font-semibold">
          Incredible apps together.
        </span>
      </h2>

      <div className="w-full inline-flex justify-between items-center">
        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-zinc-500 text-sm">Email:</div>
          <Link
            href="mailto:diana@matkava.com"
            className="justify-start text-white text-base font-semibold hover:text-zinc-400 transition-all duration-300"
          >
            diana@matkava.com
          </Link>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-zinc-500 text-sm">Contact Me:</div>
          <Link
            href="#contact"
            className="justify-start text-base text-white whitespace-nowrap font-semibold underline uppercase hover:text-zinc-400 transition-all duration-300"
          >
            Contact Now
          </Link>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="justify-start text-zinc-500 text-sm">Social:</div>
          <SocialMedias />
        </div>
      </div>
    </>
  );
}
function FooterMiddleBar() {
  return (
    <div className="w-full inline-flex justify-between items-center">
      <SubscribeForm />
      <FooterPageLinks />
    </div>
  );
}

function SubscribeForm() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-6 max-w-96">
      <h3 className="text-zinc-100 text-3xl font-semibold">
        Subscribe for unique updates:
      </h3>
      <form className="w-full inline-flex justify-start items-start gap-2">
        <input
          placeholder="Email"
          className="w-full min-w-60 text-base h-10 px-4 py-3 bg-transparent rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-neutral-500 inline-flex justify-start items-center overflow-hidden"
        />
        <CTA title="Submit" size="sm" color="white" type="submit">
          <FaPlay />
        </CTA>
      </form>
    </div>
  );
}

function FooterPageLinks() {
  return (
    <nav aria-labelledby="page-links" className="w-full max-w-[336px]">
      <h2 id="page-links" className="text-2xl font-semibold text-white mb-6">
        Page Links
      </h2>

      <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-base text-zinc-500 w-md">
        <li>
          <Link
            href="/"
            title="Go to Home"
            className="hover:text-white transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            title="View my Experience"
            className="hover:text-white transition"
          >
            Experience
          </Link>
        </li>
        <li>
          <a
            href="/about"
            title="Learn more About me"
            className="hover:text-white transition"
          >
            About
          </a>
        </li>
        <li>
          <Link
            href="/contact"
            title="Contact me"
            className="hover:text-white transition"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            title="See my Projects"
            className="hover:text-white transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/cv.pdf"
            title="Download my CV"
            className="hover:text-white transition"
            rel="noopener"
            target="_blank"
          >
            View CV
          </Link>
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
            <Link
              href="/terms-of-service"
              className="hover:underline whitespace-nowrap"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="hover:underline whitespace-nowrap"
            >
              Privacy Policy
            </Link>
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
