export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="flex justify-start items-center gap-1.5">
      <div className="h-8 px-2.5 bg-[#202020] rounded-[10px] flex justify-center items-center gap-2.5 overflow-hidden">
        <div className="justify-start text-zinc-400 text-sm font-medium">
          {tag}
        </div>
      </div>
    </div>
  );
}
