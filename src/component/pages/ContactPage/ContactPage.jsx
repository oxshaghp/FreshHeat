import React, { useEffect } from "react";

import ContactInfo from "./ContactInfo";
import FormSection from "./FormSection";
import MapSec from "./MapSec/MapSec";
import Hero from "../../static/Hero";
function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
