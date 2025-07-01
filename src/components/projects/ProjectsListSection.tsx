import Button from "../shared/Button";
import CommitCard from "../shared/CommitCard";
import DecryptedText from "../shared/blocks/TextAnimations/DecryptedText";
import DotGrid from "../shared/blocks/TextAnimations/DotGrid";
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
          <>
            <div className="w-full h-full relative">
              <DotGrid
                dotSize={3}
                gap={65}
                baseColor="#404040"
                activeColor="#000000"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={400}
                returnDuration={20}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-screen py-20 flex flex-col gap-12 items-center justify-center">
                  <div className="w-full h-10 flex items-center justify-center relative">
                    <Button title="Get in Touch" size="fit" color="black" />
                  </div>

                  <h2
                    className="max-w-[1400px] text-center h-fit flex flex-col justify-center items-center bg-black font-medium"
                    id="projects-title"
                  >
                    <DecryptedText
                      speed={20}
                      text="Committed to Consistency, Growth, Building Real-World Software"
                      className="text-white text-7xl"
                      encryptedClassName="text-white text-7xl"
                    />
                    {/* <DecryptedText
                      speed={50}
                      text="Projects I've worked on"
                      className="text-neutral-700 text-5xl"
                      encryptedClassName="text-neutral-500/50 text-7xl"
                    /> */}
                  </h2>
                  <div className="w-full flex flex-row items-center justify-center relative gap-8">
                    <CommitCard
                      commits={1240}
                      title="Commits"
                      description="1240 Commits this year in personal projects"
                      className="mt-8"
                    />
                    <CommitCard
                      commits={4}
                      title="Years of Experience"
                      description="4 years of experience in software development"
                      className="mt-8"
                    />
                    <CommitCard
                      commits={10}
                      title="Commercial Projects"
                      description="10 commercial projects in my portfolio"
                      className="mt-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
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
