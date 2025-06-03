import Image from "next/image";
import { IoDownload } from "react-icons/io5";
import SocialMedias from "@app/components/contacts/SocialMedias";
import Title from "@app/components/shared/Title";

export default function ContactInfoSection() {
  return (
    <section
      className="w-full max-w-xl flex flex-col justify-start items-start gap-14"
      aria-labelledby="contact-info-title"
    >
      <header className="w-full space-y-2">
        <Title
          title="Crafting Impactful Software Solutions"
          id="contact-info-title"
          size="lg"
        />
        <p className="w-full justify-start text-neutral-400 text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{" "}
        </p>
      </header>

      <div className="w-full self-stretch inline-flex justify-start items-start gap-10">
        <Image
          alt="Diana Matkava"
          className="w-80 h-56 rounded-2xl"
          src="/me.jpeg"
          width={600}
          height={400}
          objectFit="cover"
        />
        <div className="w-full h-56 flex flex-col justify-between items-start gap-5">
          <div className="flex flex-col justify-start items-start gap-1.5">
            <div className="justify-start text-white text-2xl font-semibold">
              Diana Matkava
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch justify-start text-neutral-400 ">
                Software Developer @ Fintiba GmbH (Bank Account) Berlin, Germany
              </div>
            </div>
          </div>

          {/* <p className="w-full justify-start text-neutral-200 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p> */}

          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-start items-start gap-2.5">
              <div className="justify-start">
                <span className="text-neutral-400 ">DEV FOCUS:</span>
                <span className="text-stone-300 "> </span>
                <span className="text-white">Backend, Frontend, Devops</span>
              </div>
              <div className="justify-start">
                <span className="text-neutral-400 ">LANGUAGES:</span>
                <span className="text-stone-300 "> </span>
                <span className="text-white ">Python, JS, TX</span>
              </div>
            </div>
          </div>
          <div className="w-48 self-stretch h-11 px-5 py-2.5 bg-white rounded-3xl inline-flex justify-center items-center gap-2.5">
            <div className="flex-1 flex justify-between items-center">
              <div className="justify-start text-black font-semibold text-sm">
                Download Resume
              </div>
              <IoDownload size={18} className="text-black" />
            </div>
          </div>
        </div>
      </div>
      <SocialMedias />
    </section>
  );
}
