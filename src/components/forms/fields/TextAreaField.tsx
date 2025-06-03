import Label from "./inputs/Label";
import TextArea from "./inputs/TextArea";

export default function TextAreaField({
  label,
  value,
  name,
  required = true,
  placeholder,
  rows = 4,
  className,
  inputClassName,
  labelClassName,
}: {
  label: string;
  value: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}) {
  return (
    <div
      data-has-description="false"
      data-has-error="false"
      data-has-label="true"
      data-state="Default"
      data-value-type="Placeholder"
      className="self-stretch flex flex-col justify-start items-start gap-2"
    >
      <Label htmlFor={name} className={labelClassName}>
        {label}
      </Label>
      <TextArea
        name={name}
        className={`flex-1 justify-start text-Text-Default-Tertiary/40 text-base font-normal font-['Inter'] leading-none ${inputClassName}`}
        value={value}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
