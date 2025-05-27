import Link from "next/link";

export default function CTA({
  title,
  size,
  color,
  className = "",
  href,
}: {
  title: string;
  size: "sm" | "base" | "lg" | "xl" | "2xl";
  color: "white" | "black";
  className?: string;
  href?: string;
}) {
  return (
    <div
      className={`w-fit mx-auto py-2 px-4 rounded-3xl outline-1 outline-neutral-400 inline-flex items-center gap-2.5 ${className} ${
        color === "white" ? "bg-white" : "bg-black"
      }`}
    >
      <Link
        role="button"
        href={href ?? "/contact"}
        className={`${
          color === "white" ? "text-black" : "text-white"
        } text-${size} font-medium whitespace-nowrap`}
      >
        {title}
      </Link>
    </div>
  );
}
