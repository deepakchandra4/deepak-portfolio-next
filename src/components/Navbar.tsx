"use client";
import React, { useState } from "react";
import Open from "../assets/hamburger.png";
import Close from "../assets/remove.png";

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
    <div className="flex justify-between p-10 bg-customPurple1">
      <div>
        <h1>Deepak</h1>
      </div>

      {/* Navbar for large screens */}
      <div className="hidden sm:flex gap-5 ">
        {/* Navbar Links - Hidden on smaller screens */}
        {list.map((item, index) => (
          <div key={index} className="hover:text-customLavender cursor-pointer">
            {item.name}
          </div>
        ))}
      </div>

      {/* Hamburger Button for smaller screens */}
      <div className="sm:hidden">
        <button
          onClick={toggleNav}
          className="text-customLavender hover:text-white focus:outline-none"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Navbar for smaller screens */}
      {open && (
        <div className="flex flex-col gap-5 sm:hidden">
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
