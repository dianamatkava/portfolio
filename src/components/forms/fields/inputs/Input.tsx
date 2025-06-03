export default function Input({
  value,
  required = true,
  placeholder,
  className,
  name,
}: {
  value: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  name: string;
}) {
  return (
    <input
      name={name}
      className={`w-full px-4 py-3 bg-[#1E1E1E] rounded-md overflow-hidden ${className}`}
      required={required}
      placeholder={placeholder}
    />
  );
}
