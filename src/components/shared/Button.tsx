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
        <Link
          role="button"
          href={href ?? "/contact"}
          className={`${
            color === "white" ? "text-black" : "text-white"
          } text-sm font-medium text-center whitespace-nowrap w-fit gap-2`}
        >
          {title}
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={`${
            color === "white" ? "text-black" : "text-white"
          } text-sm font-medium text-center whitespace-nowrap ${
            size === "full" ? "w-full" : "w-fit"
          } gap-2`}
        >
          {title}
          {children}
        </button>
      )}
    </div>
  );
}
