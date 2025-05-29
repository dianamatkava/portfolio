export default function ExpertiseArticle() {
  return (
    <div className="w-[526px] px-9 py-5 bg-neutral-900 rounded-2xl shadow-[2px_2px_4px_0px_rgba(255,255,255,0.10)] outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex flex-col justify-start items-start gap-7 overflow-hidden">
      <div className="inline-flex justify-center items-center gap-2.5">
        <div className="w-11 h-11 bg-red-300 rounded-[5px]" />
        <div className="justify-start text-white text-lg font-semibold font-['Plus_Jakarta_Sans']">
          Backend Development
        </div>
      </div>
      <div className="w-[456px] text-justify justify-start text-zinc-500 text-base font-normal font-['Plus_Jakarta_Sans']">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry. Lorem Lorem Ipsum is simply
        dummy text
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
        <div className="self-stretch inline-flex justify-start items-center gap-[5px]">
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                Django
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                FastAPI
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                Flask
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                SQLAlchemy
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                Tortoise ORM
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-[5px]">
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                pytest
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                unittest
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                ruff
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                uv/poetry
              </div>
            </div>
          </div>
          <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
              Pydantic
            </div>
          </div>
          <div className="flex justify-start items-center gap-1.5">
            <div className="h-8 px-2.5 bg-neutral-800 rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-zinc-500 text-sm font-medium font-['Plus_Jakarta_Sans']">
                MyPy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
