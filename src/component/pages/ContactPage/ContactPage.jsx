import React from "react";
import Hero from "../About/Hero/Hero";
import ContactInfo from "./ContactInfo";
import FormSection from "./FormSection";
import MapSec from "./MapSec/MapSec";
function ContactPage() {
  return (
    <div>
      <Hero title={"Contact Us"} left={"Home"} right={"Contact Us"} />
      <ContactInfo />
      <FormSection />
      <MapSec />
    </div>
  );
}

export default ContactPage;
