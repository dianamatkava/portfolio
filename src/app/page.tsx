import HeaderHeroMain from "../components/header/HeaderHeroMainSection";

export default function Home() {
  return (
    <div
      className="w-full h-full container py-12"
      style={{
        backgroundImage: "url(/bg-main.jpg)",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeaderHeroMain />
    </div>
  );
}
