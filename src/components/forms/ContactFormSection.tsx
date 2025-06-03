import Button from "../shared/Button";
import CheckBox from "./fields/inputs/CheckBox";
import InputField from "./fields/InputField";
import TextAreaField from "./fields/TextAreaField";
import Title from "@app/components/shared/Title";

export default function ContactFormSection() {
  return (
    <section
      className="w-full min-w-80 max-w-lg p-6 bg-neutral-900/70 rounded-3xl shadow-md inline-flex flex-col justify-start items-start gap-6"
      aria-labelledby="contact-form-title"
    >
      <header className="space-y-1">
        <Title title="Contact Me" id="contact-form-title" />
        <p className="text-zinc-400 text-base font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{" "}
        </p>
      </header>
      <InputField
        label="Full Name"
        value="Value"
        name="fullName"
        placeholder="Enter your full name"
      />
      <InputField
        label="Email"
        value="Value"
        name="email"
        placeholder="Enter your email"
      />
      <TextAreaField
        label="Message"
        value="Value"
        name="message"
        placeholder="Enter your message"
      />

      <Button title="Submit" size="full" color="white" type="submit" />
    </section>
  );
}
