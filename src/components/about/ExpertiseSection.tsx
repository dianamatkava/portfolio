import Category from "../shared/Category";
import ExpertiseArticle from "./ExpertiseArticle";

export default function ExpertiseSection() {
  return (
    <section
      className="w-full self-stretch inline-flex justify-between items-start text-base text-white"
      aria-labelledby="expertise-title"
    >
      <h2 className="sr-only">My Areas of Expertise:</h2>
      <ExpertiseArticle />
      <ExpertiseArticle />
    </section>
  );
}
