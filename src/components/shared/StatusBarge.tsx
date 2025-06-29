import GradientText from "./blocks/TextAnimations/GradientText";

export default function StatusBarge() {
  return (
    <div className="w-fit py-2 px-4 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-800 inline-flex items-center gap-2.5">
      <div className="w-1.5 h-1.5 bg-green-300 rounded-full" />
      <GradientText
        className="text-white text-sm font-medium whitespace-nowrap"
        colors={["#FFFFFF", "#e4e4e7", "#a1a1aa", "#e4e4e7", "#FFFFFF"]} // ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]
        animationSpeed={4}
      >
        Open to work
      </GradientText>
    </div>
  );
}
