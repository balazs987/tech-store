import React from "react";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";

function ContactPage() {
  return (
    <React.Fragment>
      <Hero img={contactBcg} />
      <Contact />
    </React.Fragment>
  );
}

export default ContactPage;
