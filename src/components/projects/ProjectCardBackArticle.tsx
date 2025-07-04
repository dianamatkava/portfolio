"use client";

import Button from "../shared/Button";
import Category from "../shared/Category";
import Title from "../shared/Title";

export default function ProjectCardBackArticle() {
  return (
    <article
      className="w-full h-full min-h-[600px] flex flex-col justify-center items-start gap-8 font-medium text-white rounded-t-2xl py-20 px-12"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.5) 0%,
            rgba(0,0,0,0.5) 20%,
            rgba(0,0,0,0.85) 40%,
            rgba(0,0,0,0.95) 100%
          ),
          url('/about-me.jpg')
        `,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full space-y-4">
        <Title
          title="Corporate Websites"
          size="xl"
          className="!font-bold w-full text-center uppercase"
        />
        <p className="max-w-90 text-center justify-start text-neutral-300 text-base uppercase">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </p>
      </div>
      <div className="w-full h-full flex flex-row justify-between items-start gap-8 px-20">
        <div className="w-full h-full space-y-4">
          <p className="w-full h-full self-stretch flex flex-col justify-between items-start text-neutral-400 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum is simply dummy text of the printing and
            typesetting.Lorem Ipsum is simply dummy text of the printing and
            typesetting.Lorem Ipsum is simply dummy text of the printing and
            typesetting.
          </p>
          <p className="w-full text-neutral-400 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum is simply dummy text of the printing and
            typesetting.Lorem Ipsum is simply dummy text of the printing and
            typesetting.Lorem Ipsum is simply dummy text of the printing and
            typesetting.
          </p>
          <div className="inline-flex justify-start items-start gap-4">
            <Button
              title="GitHub"
              href="#"
              size="fit"
              color="transparent"
              className="!px-10"
            />
            <Button
              title="Linkedin"
              href="#"
              size="fit"
              color="transparent"
              className="!px-10"
            />
          </div>
        </div>
        <div className="w-fit min-w-96 space-y-4 bg-zinc-900/80 px-8 py-4 rounded-lg shadow-lg">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <Category title="Tech stack" className="text-xs font-semibold" />
            <ul className="self-stretch inline-flex justify-start items-start gap-7">
              <li className="justify-start text-zinc-300 text-base font-medium whitespace-nowrap">
                Next.js
              </li>
              <li className="justify-start text-zinc-300 text-base font-medium whitespace-nowrap">
                Tailwind CSS
              </li>
              <li className="justify-start text-zinc-300 text-base font-medium whitespace-nowrap">
                TypeScript
              </li>
            </ul>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <Category title="Date" className="text-xs font-semibold" />
            <span className="justify-start text-zinc-300 text-base font-medium">
              1 May 2025 - 10 May 2025
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <Category title="Client" className="text-xs font-semibold" />
            <span className="justify-start text-zinc-300 text-base font-medium">
              OtterWater Inc.
            </span>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <Category title="Location" className="text-sm font-semibold" />
            <span className="justify-start text-zinc-300 text-base font-medium">
              New York, USA
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
