export default function Footer() {
  return (
    <>
      <FooterTopBar />
      <FooterMiddleBar />
      <FooterBottomBar />
      <MovingText text="DIANAMATKAVA" />
    </>
  );
}

function FooterTopBar() {
  return (
    <div className="w-full py-8 inline-flex justify-between items-center bg-black"></div>
  );
}
function FooterMiddleBar() {
  return (
    <div className="w-full py-8 inline-flex justify-between items-center bg-black"></div>
  );
}
function FooterBottomBar() {
  return (
    <div className="w-full py-8 inline-flex justify-between items-center bg-black"></div>
  );
}

function MovingText({
  direction = "left",
  text = "",
  textStyle = "",
}: {
  direction?: string;
  text?: string;
  textStyle?: string;
}) {
  return (
    <div
      className="w-full overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
      role="presentation"
    >
      <div
        className={`flex w-max text-[350px] font-extrabold text-white whitespace-nowrap ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <span key={index} className={textStyle}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
