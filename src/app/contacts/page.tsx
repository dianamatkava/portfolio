import ContactFormSection from "@app/components/forms/ContactFormSection";
import ContactInfoSection from "@app/components/contacts/ContactInfoSection";

export default function Contacts() {
  return (
    <div
      className="w-full h-full inline-flex flex-row justify-between items-center"
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
      <div className="w-full h-full inline-flex flex-row justify-between items-center py-20 gap-20 container">
        <ContactInfoSection />
        <div data-aos="fade-up" data-aos-delay="200">
          <ContactFormSection />
        </div>
      </div>
    </div>
  );
}
