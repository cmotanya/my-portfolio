import ContactForm from "./components/contact/contact-form";
import { Bebas_Neue } from "next/font/google";
import { cn } from "./utils/cn";
import { InView } from "./components/in-view";

const neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

  return (
    <section id="contact" className="mb-12">
      <InView
        variants={{
          hidden: {
            opacity: 0,
            x: 30,
            scale: 0.9,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -100px 0px" }}
      >
        <h1 className={cn("text-6xl font-bold uppercase", neue.className)}>
          Contact
        </h1>
        <h2
          className={cn(
            "mb-4 pt-4 text-3xl font-medium md:text-center",
            neue.className,
          )}
        >
          Send Me A Message
        </h2>

        <div>{accessKey && <ContactForm accessKey={accessKey} />}</div>
      </InView>
    </section>
  );
};

export default Contact;
