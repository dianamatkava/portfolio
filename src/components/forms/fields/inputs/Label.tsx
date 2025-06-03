export default function Label({
  children,
  className,
  htmlFor,
}: {
  children: React.ReactNode;
  className?: string;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-zinc-500 text-sm font-normal ${className}`}
    >
      {children}
    </label>
  );
}
