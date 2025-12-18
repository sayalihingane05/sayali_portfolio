import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="flex flex-col md:flex-row justify-around bg-[#2f3b69] text-white p-10 md:p-12 items-center gap-8">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal mt-2">Feel free to reach out!</h3>
      </div>
      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-2 items-center"><MdOutlineEmail size={20} />sayalihingane00@gmail.com</li>
        <li className="flex gap-2 items-center"><CiLinkedin size={20} /> linkedin.com/in/sayali-hingane-b3bb0431a</li>
        <li className="flex gap-2 items-center"><FaGithub size={20} /> github.com/sayalihingane05</li>
      </ul>
    </div>
  );
};

export default Footer;
