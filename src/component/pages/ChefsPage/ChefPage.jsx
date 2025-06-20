import React, { useEffect } from "react";
import Hero from "/src/component/static/Hero";
import Main from "./Chefs/Main";

function ChefPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero title={"Chef"} left={"Home"} right={"Chef"} />
      <Main />
    </div>
  );
}

export default ChefPage;
