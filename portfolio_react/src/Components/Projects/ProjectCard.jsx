


// import React from "react";
// import { motion } from "framer-motion";

// const ProjectCard = ({ title, main, img, demo, source }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="relative group bg-[#1e293b] rounded-2xl overflow-hidden 
//       shadow-lg hover:shadow-blue-500/40 transition-all duration-500"
//     >
//       {/* Image */}
//       <div className="overflow-hidden">
//         <img
//           src={img}
//           alt={title}
//           className="h-48 w-full object-cover 
//           group-hover:scale-110 transition duration-500"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-white">{title}</h3>
//         <p className="text-sm mt-2 text-gray-400">{main}</p>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-6">
//           <a
//             href={demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 text-center bg-blue-600 py-2 rounded-full 
//             hover:bg-blue-700 transition"
//           >
//             Live Demo
//           </a>

//           <a
//             href={source}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 text-center bg-purple-600 py-2 rounded-full 
//             hover:bg-purple-700 transition"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, main, tech, img, demo, source }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group bg-[#1e293b] rounded-2xl overflow-hidden 
      shadow-lg hover:shadow-blue-500/40 transition-all duration-500"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-48 w-full object-cover 
          group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm mt-2 text-gray-400">
          {main}
        </p>

        {/* Tech Stack */}
        <p className="text-xs mt-3 text-blue-400 font-medium">
          {tech}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-blue-600 py-2 rounded-full 
            hover:bg-blue-700 transition font-medium"
          >
            Live Demo
          </a>

          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-purple-600 py-2 rounded-full 
            hover:bg-purple-700 transition font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;