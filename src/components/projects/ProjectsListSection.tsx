import DecryptedText from "../shared/blocks/TextAnimations/DecryptedText";
import ProjectCardBackArticle from "./ProjectCardBackArticle";
import ProjectCardFrontArticle from "./ProjectCardFrontArticle";
import ScrollCardStack from "../shared/blocks/TextAnimations/ScrollCardStack";
import { ZoomReplace } from "../shared/blocks/TextAnimations/ZoomReplace";

export default function ProjectsListSection() {
  return (
    <section
      className="w-full h-full space-y-12"
      aria-labelledby="projects-title"
      id="projects"
    >
      <ZoomReplace
        zoomComponent={
          <h2
            className="w-full flex flex-col justify-center items-center"
            id="projects-title"
            data-aos="fade-down"
          >
            <DecryptedText
              speed={80}
              text="Explore my work"
              className="text-white text-7xl font-semibold"
              encryptedClassName="text-white text-7xl font-semibold"
            />
            <DecryptedText
              speed={50}
              text="Projects I've worked on"
              className="text-neutral-500/50 text-7xl font-semibold"
              encryptedClassName="text-neutral-500/50 text-7xl font-semibold"
            />
          </h2>
        }
        revealComponent={
          <ScrollCardStack
            cards={[
              <ProjectCardFrontArticle />,
              <ProjectCardFrontArticle />,
              <ProjectCardFrontArticle />,
              <ProjectCardFrontArticle />,
            ]}
          />
        }
      />
    </section>
  );
}
