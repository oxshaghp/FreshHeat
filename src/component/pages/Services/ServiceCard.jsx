import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="bg-white hover:bg-[#050F1C] lg:w-[400px] w-full max-w-fill mx-auto shadow-lg rounded-2xl p-10 m-4 relative group transition-all duration-500">
      <div className="w-[70px] h-[70px] rounded-t-full rounded-bl-full rounded-br-lg flex items-center justify-center bg-[#FDE5E9] transform group-hover:rotate-360 rotate-0 transition-all duration-500">
        <img src={service.image} alt="Service Image" className="z-20" />
      </div>

      <img
        src="../Service/servicesShape1_1.png"
        alt="icon"
        className="absolute top-5 right-5"
      />
      <div className="flex flex-col gap-1 lg:w-[95%] mt-5">
        <h1 className="text-[var(--text)] font-bold capitalize text-xl">
          {service.title}
        </h1>
        <p className="text-[var(--text)] ">{service.description}</p>
      </div>

      <img
        src="../Service/servicesShape1_2.png"
        alt="icon"
        className="absolute bottom-5 right-5"
      />
    </div>
  );
}

export default ServiceCard;
