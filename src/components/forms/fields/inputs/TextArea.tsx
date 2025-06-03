export default function TextArea({
  value,
  required = true,
  placeholder,
  className,
  name,
  rows = 4,
}: {
  value: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  name: string;
  rows?: number;
}) {
  return (
    <textarea
      name={name}
      className={`w-full px-4 py-3 bg-[#1E1E1E] rounded-md overflow-hidden ${className}`}
      required={required}
      placeholder={placeholder}
      rows={rows}
    />
  );
}
