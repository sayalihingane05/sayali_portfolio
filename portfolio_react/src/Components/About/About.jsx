

import React from "react";
import { IoArrowForward } from "react-icons/io5";
import AboutImg from "../../assets/AboutImg.jpg";

const About = () => {
  const skills = [
    {
      title: "Frontend Developer",
      description:
        "I build responsive web apps using React, JavaScript, HTML, CSS, Tailwind.",
    },
    {
      title: "Backend Developer",
      description:
        "I develop secure backend services with clean code and validations.",
    },
    {
      title: "Database Developer",
      description:
        "I design structured databases and integrate them using JDBC & SQL.",
    },
  ];

  return (
    <section
      id="About"
      className="animate-fadeUp text-white bg-black/30 shadow-xl 
      rounded-lg mx-4 md:mx-20 p-6 md:p-12"
    >
      <h2 className="text-4xl font-bold mb-8">About</h2>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img
          src={AboutImg}
          alt="About"
          className="w-full md:w-1/3 rounded-lg"
        />

        <div className="flex flex-col gap-6 md:w-2/3">
          {skills.map((skill) => (
            <div key={skill.title} className="flex gap-3">
              <IoArrowForward size={26} className="text-[#465697]" />
              <div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <p className="text-sm mt-1">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
