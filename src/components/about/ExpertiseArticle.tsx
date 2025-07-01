import Image from "next/image";
import Tag from "../shared/Tag";

export default function ExpertiseArticle({
  title,
  description,
  image,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) {
  return (
    <article
      className="w-full px-8 py-6 bg-[#0F0F0F] rounded-2xl shadow-md outline outline-1 outline-offset-[-1px] outline-neutral-900 inline-flex flex-col justify-start items-start gap-4 overflow-hidden text-base"
      data-aos="fade-up"
    >
      <header className="inline-flex justify-center items-center gap-2.5">
        <Image
          src={image || ""}
          alt={title}
          width={40}
          height={40}
          className="rounded-md bg-white object-cover p-1.5"
        />
        <h3 className="justify-start text-white text-lg font-semibold">
          {title}
        </h3>
      </header>

      <p className="w-full text-zinc-500">{description}</p>

      <div className="w-full inline-flex flex-wrap justify-start items-start gap-2">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
