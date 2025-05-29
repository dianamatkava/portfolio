import Image from "next/image";
import Tag from "../shared/Tag";

const data = [
  {
    title: "Backend Development",
    image: "/expertise/backend.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Lorem Ipsum is simply dummy text",
    tags: [
      "Django",
      "FastAPI",
      "Flask",
      "SQLAlchemy",
      "Tortoise ORM",
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Lorem Ipsum is simply dummy text",
    tags: ["Django", "FastAPI", "Flask", "SQLAlchemy", "Tortoise ORM"],
  },
];

export default function ExpertiseArticle() {
  return (
    <article className="w-full px-8 py-6 bg-[#0F0F0F] rounded-2xl shadow-md outline outline-1 outline-offset-[-1px] outline-neutral-900 inline-flex flex-col justify-start items-start gap-4 overflow-hidden text-base">
      <header className="inline-flex justify-center items-center gap-2.5">
        <Image
          src={data[0].image || ""}
          alt={data[0].title}
          width={40}
          height={40}
          className="rounded-md bg-white object-cover p-1.5"
        />
        <h3 className="justify-start text-white text-lg font-semibold">
          Backend Development
        </h3>
      </header>

      <p className="w-full text-zinc-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry. Lorem Lorem Ipsum is simply
        dummy text
      </p>

      <div className="w-full inline-flex flex-wrap justify-start items-start gap-2">
        {data[0].tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
