import ProjectCardBackArticle from "./ProjectCardBackArticle";
import ProjectCardFrontArticle from "./ProjectCardFrontArticle";

export default function ProjectsListSection() {
  return (
    <section
      className="w-full h-full space-y-12"
      aria-labelledby="projects-title"
    >
      <h2
        className="flex flex-col justify-center items-center"
        id="projects-title"
      >
        <span className="text-white text-7xl font-semibold">
          Explore my work
        </span>
        <span className="text-neutral-500/50 text-7xl font-semibold">
          Projects I've worked on
        </span>
      </h2>

      <div className="w-full h-full">
        <ProjectCardFrontArticle />
        <ProjectCardFrontArticle />
        <ProjectCardFrontArticle />
        <ProjectCardBackArticle />
      </div>
    </section>
  );
}
