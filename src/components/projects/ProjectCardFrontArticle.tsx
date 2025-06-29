"use client";

import ReadMore from "../shared/ReadMore";
import Title from "../shared/Title";

export default function ProjectCardFrontArticle() {
  return (
    <article
      className="w-full h-full min-h-[600px] flex flex-col justify-center items-center gap-4 font-medium uppercase text-white rounded-t-2xl"
      style={{
        backgroundImage: "url(/about-me.jpg)",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Title
        title="Corporate Websites"
        size="xl"
        className="!font-bold w-full text-center"
      />
      <p className="max-w-90 text-center justify-start text-neutral-300 text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
      </p>
      <ReadMore />
    </article>
  );
}
