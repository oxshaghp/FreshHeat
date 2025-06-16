import React from "react";
import Hero from "/src/component/static/Hero";
import Gallary from "./Gallary";
function GalleryPage() {
  return (
    <div>
      <Hero title={"Gallery"} left={"Home"} right={"Gallery"} />
      <Gallary />
    </div>
  );
}

export default GalleryPage;
