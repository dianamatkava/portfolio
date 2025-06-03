import AboutMeSection from "@app/components/about/AboutMeSection";
import ExpertiseSection from "@app/components/about/ExpertiseSection";
import HeaderHeroMainSection from "../components/header/HeaderHeroMainSection";
import ProjectsListSection from "@app/components/projects/ProjectsListSection";

export default function Home() {
  return (
    <div className="w-full h-full space-y-6">
      <div
        className="w-full h-full space-y-36 container"
        style={{
          backgroundImage: "url(/bg-main.jpg)",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeaderHeroMainSection />
        <AboutMeSection />
      </div>
      <div className="w-full h-full space-y-20 container">
        <ExpertiseSection />
        <ProjectsListSection />
      </div>
    </div>
  );
}
