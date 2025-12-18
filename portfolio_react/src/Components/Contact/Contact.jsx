

// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div id="Contact" className="bg-[#2f3b69] text-white 
//       flex flex-col md:flex-row justify-around p-12 animate-fadeUp">

//       <div>
//         <h1 className="text-4xl font-bold">Contact</h1>
//         <p className="mt-2">Feel free to reach out!</p>
//       </div>

//       <ul className="space-y-3 mt-6 md:mt-0">
//         <li className="flex gap-2"><MdOutlineEmail /> sayalihingane00@gmail.com</li>
//         <li className="flex gap-2"><CiLinkedin /> linkedin.com/in/sayali-hingane</li>
//         <li className="flex gap-2"><FaGithub /> github.com/sayalihingane05</li>
//       </ul>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="bg-[#2f3b69] text-white 
      flex flex-col md:flex-row justify-around 
      p-12 animate-fadeUp"
    >
      {/* Left Section */}
      <div>
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-200">
          Feel free to reach out!
        </p>
      </div>

      {/* Right Section */}
      <ul className="space-y-4 mt-6 md:mt-0 text-sm md:text-base">

        {/* Email */}
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sayalihingane00@gmail.com&su=Contact from Portfolio&body=Hello Sayali,"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center hover:text-blue-300 hover:underline transition cursor-pointer"
          >
            <MdOutlineEmail size={22} />
            sayalihingane00@gmail.com
          </a>

        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/sayali-hingane-b3bb0431a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center 
            hover:text-blue-300 hover:underline 
            transition cursor-pointer"
          >
            <CiLinkedin size={22} />
            linkedin.com/in/sayali-hingane
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com/sayalihingane05"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center 
            hover:text-blue-300 hover:underline 
            transition cursor-pointer"
          >
            <FaGithub size={22} />
            github.com/sayalihingane05
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Contact;
