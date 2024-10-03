"use client";
import React, { useState } from "react";
import Close from "@/assets/delete-cross.png";
import Menu from "@/assets/hamburger.png";
import Image from "next/image";

const Navbar = () => {
  const [list, setList] = useState([
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" },
  ]);
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-between p-10 bg-customPurple1 relative">
      <div>
        <h1>Deepak</h1>
      </div>

      {/* Navbar for large screens */}
      <div className="hidden sm:flex gap-5">
        {/* Navbar Links - Hidden on smaller screens */}
        {list.map((item, index) => (
          <div key={index} className="hover:text-customLavender cursor-pointer">
            {item.name}
          </div>
        ))}
      </div>

      {/* Hamburger Button for smaller screens */}
      <div className="sm:hidden flex absolute right-0 pr-4 py-1 justify-start z-10 ">
        <button
          onClick={toggleNav}
          className="text-customLavender hover:text-white focus:outline-none"
        >
          <Image
            src={open ? Close : Menu}
            alt={open ? "Close-Menu" : "Open Menu"}
            height={24}
            width={24}
            className="filter invert"
          />
        </button>
      </div>

      {/* Navbar for smaller screens */}
      {open && (
        <div className="flex flex-col gap-5 sm:hidden scroll-smooth mt-10 ">
          {list.map((item, index) => (
            <div
              key={index}
              className="hover:text-customLavender cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
