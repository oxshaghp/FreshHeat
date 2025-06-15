import React from "react";
import Hero from "/src/component/static/Hero";
import Main from "./Chefs/Main";
function ChefPage() {
  return (
    <div>
      <Hero title={"Chef"} left={"Home"} right={"Chef"} />
      <Main />
    </div>
  );
}

export default ChefPage;
