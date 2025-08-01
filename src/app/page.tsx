// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section id="acceuil">
        <Hero />
      </section>
      <section id="mes-competences">
        <Clients />
        <Skills />
      </section>
      <section id="mes-projets">
        <Projects />
        <Resume />
      </section>
      <section id="service">
        <Testimonial />
        <PopularClients />
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
