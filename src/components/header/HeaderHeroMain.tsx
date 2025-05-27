import Category from "../shared/Category";
import SocialMedias from "../contacts/SocialMedias";

export default function HeaderHeroMain() {
  return (
    <div className="w-full flex flex-col items-start gap-12">
      <HeroTitle />

      <div className="w-full h-0 outline-[0.50px] outline-zinc-700" />

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
        <SocialMedias />
      </div>
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="w-fit flex flex-col justify-start items-start gap-2 py-12">
      <h1 className="flex flex-col justify-start">
        <span className="text-white text-[180px] font-extrabold leading-[175px]">
          CREATIVE
        </span>
        <span className="text-neutral-500/50 text-[180px] font-extrabold leading-[175px]">
          DEVELOPER
        </span>
      </h1>
      <span className="self-stretch text-right justify-start text-neutral-400 text-md leading-none">
        # Diana Matkava / Web Developer
      </span>
    </div>
  );
}
