import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <h1 className="heading-primary text-center">Get In Touch</h1>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

