"use client";

import Category from "../shared/Category";
import DelimiterLine from "../shared/DelimiterLine";
import SocialMedias from "../contacts/SocialMedias";
import TypewriterText from "../shared/animations/TypewriterText";

export default function HeaderHeroMainSection() {
  return (
    <section
      className="w-full flex flex-col items-start gap-10"
      aria-labelledby="hero-title"
    >
      <HeroTitle id="hero-title" />
      <DelimiterLine />
      <div
        className="w-full inline-flex justify-between items-start"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-easing="ease-in-sine"
      >
        <div className="w-3/5">
          <Category title="Who am I:" />
        </div>
        <p className="text-zinc-500 text-base font-normal w-full">
          I’m a backend-focused Software Developer based in Berlin with a strong
          foundation in architecture, performance optimization, and test-driven
          development. I bring a balance of technical expertise and team-first
          mindset — delivering clean, maintainable code
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-offset="0"
        className="w-full inline-flex justify-between items-start"
      >
        <div className="w-3/5">
          <Category title="Socials:" />
        </div>
        <SocialMedias />
      </div>
    </section>
  );
}

function HeroTitle({ id }: { id: string }) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2 py-12 relative">
      <TypewriterText
        title="Creative "
        words={["Developer", "Engineer", "Freelancer"]}
        titleClassName="uppercase text-white text-[180px] font-extrabold leading-[175px]"
        wordsClassName="uppercase text-neutral-500/50 text-[180px] font-extrabold leading-[175px]"
      />
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-easing="ease-in-sine"
        className="absolute bottom-0 right-0 text-right justify-start text-zinc-500 text-md leading-none"
      >
        # Diana Matkava / Web Developer
      </div>
    </div>
  );
}
