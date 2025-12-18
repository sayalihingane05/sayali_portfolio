// import React from 'react'
// import { IoArrowForward } from 'react-icons/io5'
// import AboutImg from '../../assets/AboutImg.jpg'

// export const About = () => {
//   return (
//     <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
//         <div>
//             <h2 className='text-2xl md:text-4xl font-bold '>About</h2>
//             <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
//                 <img className='md:h:100' src={AboutImg} alt="About img"/>

//                 <ul>
//                     <div className='flex gap-3 py-4'>
//                         <IoArrowForward size={30} className='mt-1'/>

//                         <span className="w-96">
//                             <h1 className='text-xl md:text-2xl font-semibold'>Frontend Developer</h1>
//                             <p className='text-sm md:text-md leading-tight'>
//                                I am a Frontend Developer with a strong focus on building responsive, user-friendly, and visually appealing web applications. I specialize in creating modern interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS. 
//                             </p>
                            
//                             </span>
//                     </div>

//                     <div className='flex gap-3 py-4'>
//                         <IoArrowForward size={30} className='mt-1'/>

//                         <span className="w-96">
//                             <h1 className='text-xl md:text-2xl font-semibold'>Backend developer</h1>
//                             <p className='text-sm md:text-md leading-tight'>
//                               I focus on writing clean, maintainable code and implementing proper error handling, validation, and security practices. I enjoy solving backend problems and integrating frontend applications with reliable backend services.  
//                             </p>
                            
//                             </span>
//                     </div>

//                     <div className='flex gap-3 py-4'>
//                         <IoArrowForward size={30} className='mt-1'/>

//                         <span className="w-96">
//                             <h1 className='text-xl md:text-2xl font-semibold'>
//                                 Database Developer</h1>
//                             <p className='text-sm md:text-md leading-tight'>
//                                I focus on creating well-structured databases, ensuring data integrity, and optimizing queries for better performance. I also have experience connecting databases with backend applications using JDBC. 
//                             </p>
                            
//                             </span>
//                     </div>
//                 </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import AboutImg from '../../assets/AboutImg.jpg';

const About = () => {
  const skills = [
    {
      title: "Frontend Developer",
      description:
        "I build responsive, user-friendly web apps using React, JavaScript, HTML, CSS, and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      description:
        "I write clean, maintainable backend code, with proper validation, error handling, and integration with frontends.",
    },
    {
      title: "Database Developer",
      description:
        "I design well-structured databases, ensure data integrity, and connect them to backend apps using JDBC.",
    },
  ];

  return (
    <section
      id="About"
      className="text-white bg-black bg-opacity-30 shadow-xl rounded-lg mx-4 md:mx-20 p-6 md:p-12"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">
        About
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <img
          src={AboutImg}
          alt="About"
          className="w-full md:w-1/3 h-auto rounded-lg object-cover"
        />

        {/* Skills */}
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          {skills.map((skill) => (
            <div key={skill.title} className="flex gap-3 items-start">
              <IoArrowForward size={28} className="mt-1 text-[#465697]" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{skill.title}</h3>
                <p className="text-sm md:text-md leading-relaxed mt-1">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
