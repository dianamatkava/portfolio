import ExpertiseArticle from "./ExpertiseArticle";

const data = [
  {
    title: "Backend Development",
    image: "/expertise/backend.png",
    description:
      "I specialize in building robust, scalable backend systems using Python and modern frameworks like Django and FastAPI. My experience spans across REST API design, asynchronous processing and SQL-based data modeling. I focus on performance, clean architecture, and maintainability in everything I build.",
    tags: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Pydantic",
      "Unittest",
      "Pytest",
      "REST",
      "pandas",
      "Celery",
      "SQLAlchemy",
      "Tortoise ORM",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: "Frontend Development",
    image: "/expertise/frontend.png",
    description:
      "I work with modern JavaScript frameworks to create responsive, accessible, and performant user interfaces. I primarily use React and Next.js, along with TypeScript, to build full-stack applications. My frontend work emphasizes clarity, consistency, and a seamless user experience across devices.",
    tags: [
      "JS",
      "TS",
      "React",
      "Next.js",
      "Remix",
      "MongoDB",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "DevOps",
    image: "/expertise/devops.png",
    description:
      "I have hands-on experience in deploying and managing applications using Docker, GitLab CI/CD, and cloud platforms like AWS, Vercel, and DigitalOcean. I care about automation, observability, and system stability, using tools like Sentry and Datadog to monitor performance and errors.",
    tags: [
      "AWS",
      "Docker",
      "Docker Compose",
      "GitLab CI/CD",
      "Git",
      "DigitalOcean",
      "Vercel",
      "Sentry",
      "Datadog",
      "Selenium",
    ],
  },
  {
    title: "Corporate Websites Development",
    image: "/expertise/corporate.png",
    description:
      "I build and maintain fast, SEO-optimized corporate websites using CMS platforms like Strapi and Sanity. From custom frontend design to marketing integrations like ActiveCampaign and analytics tracking, I ensure websites are both technically solid and conversion-focused.",
    tags: [
      "Figma",
      "Sanity",
      "Strapi",
      "SEO Optimization",
      "Google Analytics",
      "ActiveCampaign",
      "Next.js",
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section
      className="w-full self-stretch inline-flex justify-between items-start text-base text-white"
      aria-labelledby="expertise-title"
      id="experience"
    >
      <h2 className="sr-only">My Areas of Expertise:</h2>
      <div className="w-full grid grid-cols-2 gap-6">
        {data.map((item) => (
          <ExpertiseArticle key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
