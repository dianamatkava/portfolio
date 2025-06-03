import Category from "../shared/Category";
import DelimiterLine from "../shared/DelimiterLine";
import SocialMedias from "../contacts/SocialMedias";

export default function HeaderHeroMainSection() {
  return (
    <section
      className="w-full flex flex-col items-start gap-12"
      aria-labelledby="hero-title"
    >
      <HeroTitle id="hero-title" />
      <DelimiterLine />
      <div className="w-full inline-flex justify-between items-start">
        <div className="w-3/5">
          <Category title="Who am I:" />
        </div>
        <p className="text-zinc-500 text-base font-normal w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="w-full inline-flex justify-between items-start">
        <div className="w-3/5">
          <Category title="Socials:" />
        </div>
        <SocialMedias colorClassName="text-zinc-500 group-hover:text-zinc-400" />
      </div>
    </section>
  );
}

function HeroTitle({ id }: { id: string }) {
  return (
    <div className="w-fit flex flex-col justify-start items-start gap-2 py-12">
      <h1 className="flex flex-col justify-start" id={id}>
        <span className="text-white text-[180px] font-extrabold leading-[175px]">
          CREATIVE
        </span>
        <span className="text-neutral-500/50 text-[180px] font-extrabold leading-[175px]">
          DEVELOPER
        </span>
      </h1>
      <span className="self-stretch text-right justify-start text-zinc-500 text-sm leading-none">
        # Diana Matkava / Web Developer
      </span>
    </div>
  );
}
