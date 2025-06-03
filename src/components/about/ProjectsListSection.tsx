export default function ProjectsListSection() {
  return (
    <section
      className="w-full h-full space-y-12 container"
      aria-labelledby="projects-title"
    >
      <h2
        className="flex flex-col justify-center items-center"
        id="projects-title"
      >
        <span className="text-white text-7xl font-semibold">Let's build</span>
        <span className="text-neutral-500/50 text-7xl font-semibold">
          Incredible apps together.
        </span>
      </h2>
    </section>
  );
}
