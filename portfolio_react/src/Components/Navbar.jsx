

import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["About", "Certificates", "Projects", "Contact"];
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(sec);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center 
      px-6 md:px-20 py-4 bg-[#19254a]/90 backdrop-blur-md shadow-lg text-white">

      <span className="text-xl font-bold">Portfolio</span>

      <ul className={`md:flex gap-6 absolute md:static top-20 left-0 w-full md:w-auto 
        bg-black md:bg-transparent p-6 md:p-0 rounded-xl
        ${menuOpen ? "block" : "hidden"}`}>

        {["About", "Certificates", "Projects", "Contact"].map((item) => (
          <li key={item} className="text-center">
            <a
              href={`#${item}`}
              className={`transition font-medium 
                ${active === item ? "text-blue-400" : "hover:text-blue-300"}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine size={28} onClick={() => setMenuOpen(false)} />
        ) : (
          <RiMenu2Line size={28} onClick={() => setMenuOpen(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
