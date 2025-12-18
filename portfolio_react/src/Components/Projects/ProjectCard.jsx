// import React from "react";
// import bannerImg from "../../assets/bannerImg.jpg";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <div className="max-w-sm bg-[#283476] rounded-2xl shadow-xl 
//       hover:shadow-blue-500/30 hover:scale-105 transition animate-fadeUp">

//       <img src={bannerImg} className="h-48 w-full object-cover" alt="" />

//       <div className="p-5">
//         <h3 className="text-xl font-bold">{title}</h3>
//         <p className="text-sm mt-2">{main}</p>

//         <div className="flex gap-4 mt-5">
//           <button className="flex-1 bg-black py-2 rounded-full hover:scale-105 transition">
//             Demo
//           </button>
//           <button className="flex-1 bg-black py-2 rounded-full hover:scale-105 transition">
//             Source
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, main, img, demo, source }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group bg-[#283476] rounded-2xl overflow-hidden 
      shadow-lg hover:shadow-blue-500/50 transition-all duration-500"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r 
      from-blue-500/30 to-purple-500/30 
      opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="h-48 w-full object-cover 
        group-hover:scale-110 transition duration-500"
      />

      {/* Content */}
      <div className="relative p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-2 text-gray-300">{main}</p>

        <div className="flex gap-4 mt-6">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-black py-2 rounded-full 
            hover:bg-blue-600 transition"
          >
            Demo
          </a>
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-black py-2 rounded-full 
            hover:bg-purple-600 transition"
          >
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
