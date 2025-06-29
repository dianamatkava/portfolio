import { AnimatedLink } from "./AnimatedLink";
import { FlipTopText } from "./animations/FlipTopText";
import Link from "next/link";

export default function Button({
  title,
  size,
  color,
  className = "",
  type = "link",
  href,
  children,
}: {
  title: string;
  size: "fit" | "full";
  color: "white" | "black" | "transparent";
  className?: string;
  type?: "link" | "submit";
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`w-full mx-auto py-2 px-4 rounded-full outline outline-1 outline-neutral-400 inline-flex items-center gap-2.5 ${className} ${
        color === "white" ? "bg-white" : "bg-black"
      } ${color === "transparent" ? "bg-transparent" : ""}`}
    >
      {type === "link" ? (
        <AnimatedLink
          href={href ?? "/contact"}
          className={`${
            color === "white" ? "text-black" : "text-white"
          } text-sm font-medium text-center whitespace-nowrap w-fit gap-2 inline-flex items-center justify-between`}
        >
          {title}
          {children}
        </AnimatedLink>
      ) : (
        <button
          type={type}
          className={`${
            color === "white" ? "text-black" : "text-white"
          } text-sm font-medium text-center whitespace-nowrap ${
            size === "full" ? "w-full" : "w-fit"
          } gap-2 inline-flex items-center justify-between`}
        >
          <FlipTopText>
            <span className="inline-flex items-center justify-between">
              {title}
              {children}
            </span>
          </FlipTopText>
        </button>
      )}
    </div>
  );
}
