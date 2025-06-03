import ContactFormSection from "@app/components/forms/ContactFormSection";

export default function Contacts() {
  return (
    <div className="w-full h-full inline-flex flex-col justify-start items-center gap-20 container">
      <div
        className="w-full h-full space-y-36 container"
        style={{
          backgroundImage: "url(/bg-main.jpg)",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContactFormSection />
      </div>
    </div>
  );
}
