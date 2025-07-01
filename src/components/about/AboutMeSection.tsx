import Button from "../shared/Button";
import Category from "../shared/Category";
import { FaLocationDot } from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section
      className="w-full self-stretch inline-flex justify-between items-start text-base text-white"
      aria-labelledby="about-me-title"
      id="about"
    >
      <div className="space-y-8 w-1/2">
        <div className="space-y-6">
          <Category title="About Me:" id="about-me-title" />
          <div className="flex flex-col justify-start items-start gap-5">
            <p
              className="justify-start text-6xl font-medium"
              data-aos="fade-up"
            >
              Diana Matkava
            </p>

            <div className="w-full flex flex-col gap-2 text-zinc-300">
              <div
                className="inline-flex items-center gap-2"
                data-aos="fade-up"
              >
                <HiOfficeBuilding />
                <span>Software Developer @ Fintiba GmbH (Bank Account)</span>
              </div>

              <div
                className="inline-flex items-center gap-2"
                data-aos="fade-up"
              >
                <FaLocationDot />
                <span>Berlin, Germany</span>
              </div>
            </div>

            <div className="w-full text-justify text-zinc-400 text-base space-y-4">
              <p data-aos="fade-up">
                Hi, I’m Diana — a Berlin-based Software Developer focused on
                backend engineering. At Fintiba GmbH, I build scalable, secure
                fintech systems using Python, Django, and FastAPI. I care about
                clean architecture, performance, and developer experience, and
                enjoy working in fast-paced teams where autonomy, clarity, and
                real product impact matter.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2.5">
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="inline-flex justify-start items-start gap-10">
              <div className="inline-flex items-center gap-2">
                <span className="text-zinc-500">LANGUAGES:</span>
                <span className="text-white">Python, JS, TX</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="text-zinc-500">DEV FOCUS:</span>
                <span className="text-gray-200">Backend, Frontend, Devops</span>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex justify-start items-start gap-4">
          <Button
            title="GitHub"
            href="#"
            size="fit"
            color="black"
            className="!px-10"
          />
          <Button
            title="Linkedin"
            href="#"
            size="fit"
            color="black"
            className="!px-10"
          />
        </div>
      </div>

      <figure className="relative aspect-[16/14]">
        <Image
          alt="Diana Matkava"
          className="w-full h-full rounded-2xl object-cover"
          src="/about-me.jpg"
          width={522}
          data-aos="fade-up"
          height={280}
        />
      </figure>
    </section>
  );
}
