import React from "react";
import { GrLocation } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TbClockHour1 } from "react-icons/tb";

function ContactInfo() {
  const data = [
    {
      id: 1,
      icone: <GrLocation className="text-3xl text-[var(--border-3)]" />,
      title: "Our Address",
      des: "4517 Washington Ave. Manchester, Kentucky 39495",
    },
    {
      id: 2,
      icone: <CiMail className="text-3xl text-[var(--border-3)]" />,
      title: "info@example.com",
      des: "Email us anytime for any kind of query.",
    },
    {
      id: 3,
      icone: <IoCallOutline className="text-3xl text-[var(--border-3)]" />,
      title: "Hotline: +208-666-01112",
      des: "24/7 priority Live Chat and ticket support.",
    },
    {
      id: 4,
      icone: <TbClockHour1 className="text-3xl text-[var(--border-3)]" />,
      title: "Opening Hours",
      des: "Sun–Fri: 9 AM – 6 PM / Sat: 9 AM – 4 PM",
    },
  ];

  return (
    <section className="w-full p-10 flex justify-center items-center gap-6 flex-wrap bg-[var(--bg2)]">
      {data.map((el) => (
        <div
          key={el.id}
          className="w-72 p-8 rounded-xl bg-white border border-[var(--border-3)] backdrop-blur-md shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="w-14 h-14 rounded-full flex justify-center items-center bg-[var(--bg2)] border border-[var(--border-3)]">
              {el.icone}
            </div>
          </div>
          <h3 className="text-lg text-black font-bold text-center mb-2">
            {el.title}
          </h3>
          <p className="text-sm text-gray-500 text-center">{el.des}</p>
        </div>
      ))}
    </section>
  );
}

export default ContactInfo;
