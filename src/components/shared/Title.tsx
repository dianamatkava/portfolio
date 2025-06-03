type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default function Category({
  title,
  tag = "h2",
  size = "base",
  id = "",
  className = "",
}: {
  title: string;
  tag?: Tag;
  size?: "base" | "lg" | "xl";
  id?: string;
  className?: string;
}) {
  const sizeClass = {
    base: "text-2xl",
    lg: "text-5xl",
    xl: "text-6xl",
  };
  const Tag = tag;
  return (
    <Tag
      id={id}
      className={`w-full text-white text-2xl font-semibold ${sizeClass[size]} ${className}`}
    >
      {title}
    </Tag>
  );
}
