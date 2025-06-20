import React, { useEffect } from "react";
import Hero from "/src/component/static/Hero";
import Gallary from "./Gallary";

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero title={"Gallery"} left={"Home"} right={"Gallery"} />
      <Gallary />
    </div>
  );
}

export default GalleryPage;
