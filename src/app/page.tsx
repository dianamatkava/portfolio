import AboutMeSection from "@app/components/about/AboutMeSection";
import HeaderHeroMainSection from "../components/header/HeaderHeroMainSection";

export default function Home() {
  return (
    <div
      className="w-full h-full space-y-36 container py-12"
      style={{
        backgroundImage: "url(/bg-main.jpg)",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeaderHeroMainSection />
      <AboutMeSection />
    </div>
  );
}
