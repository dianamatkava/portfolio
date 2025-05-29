import Link from "next/link";

export default function CTA({
  title,
  size,
  color,
  className = "",
  type = "link",
  href,
  children,
}: {
  title: string;
  size: "sm" | "base" | "lg" | "xl" | "2xl";
  color: "white" | "black";
  className?: string;
  type?: "link" | "submit";
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`w-fit mx-auto py-2 px-4 rounded-xl outline outline-1 outline-neutral-400 inline-flex items-center gap-2.5 ${className} ${
        color === "white" ? "bg-white" : "bg-black"
      }`}
    >
      {type === "link" ? (
        <Link
          role="button"
          href={href ?? "/contact"}
          className={`${
            color === "white" ? "text-black" : "text-white"
          } text-${size} font-medium whitespace-nowrap w-fit inline-flex items-center gap-2`}
        >
          {title}
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={`${
            color === "white" ? "text-black" : "text-white"
          } text-${size} font-medium whitespace-nowrap w-fit inline-flex items-center gap-2`}
        >
          {title}
          {children}
        </button>
      )}
    </div>
  );
}
