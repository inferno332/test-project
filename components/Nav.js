"use client"; // this is a client component 👈🏽
import { useState } from "react";

const Nav = () => {
  const navItems = [
    "All",
    "Manpower Supply",
    "Mobile App/Websites",
    "UI/UX Design",
  ];
  const [selected, setSelected] = useState("All");

  const handleClick = (e) => {
    setSelected(e);
  };

  return (
    <div className="flex space-x-10">
      {navItems.map((nav) => (
        <div
          onClick={() => handleClick(nav)}
          className={`infoText ${selected === nav && "bg-[#F8D000]"}`}
        >
          <p>{nav}</p>
        </div>
      ))}
    </div>
  );
};

export default Nav;
