type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Category({
  title,
  tag = "h2",
  className = "",
}: {
  title: string;
  tag?: Tag;
  className?: string;
}) {
  const Tag = tag;
  return (
    <Tag
      className={`w-full text-zinc-500 text-base font-normal uppercase ${className}`}
    >
      {title}
    </Tag>
  );
}
