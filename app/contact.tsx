import ContactForm from "./components/contact/contact-form";
import { Bebas_Neue } from "next/font/google";
import { cn } from "./utils/cn";

const neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  const accessKey = "2e3adbbc-1bf9-439a-b88a-d85e13ac63fe";
  return (
    <div id="contact" className="mb-12">
      <h1 className={cn("text-6xl font-bold uppercase", neue.className)}>
        Contact
      </h1>

      <div>
        <ContactForm accessKey={accessKey} />
      </div>
    </div>
  );
};

export default Contact;
