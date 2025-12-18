// import React from "react";
// import bannerImg from "../../assets/bannerImg.jpg"
// const ProjectCard=({title,main})=>{
// return(
// <div className="p-3 md:p-6 flex flex-col w-80 bg-\[#0c0e19] shadow-xl shadow-slate-300 rounded-2xl">
// <img className="p-4" src={bannerImg} alt=""/>
// <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
// {title}
// </h3>
// <p clasname="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
// <div clasname="mt-2  p-2 md:p-4 flex gap-2 md:gap-4">
// <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-\[#465697]">Demo</button>
// <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-\\\[#465697]">Source Code</button>
// </div>
// </div>
// );
// };
// export default ProjectCard;

// import React from "react";
// import bannerImg from "../../assets/bannerImg.jpg";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <div className="w-full max-w-sm bg-[#283476] rounded-2xl shadow-xl shadow-slate-300 overflow-hidden hover:scale-105 transition duration-300">
      
//       <img
//         src={bannerImg}
//         alt="Project"
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-5 flex flex-col justify-between h-65">
//         <div>
//           <h3 className="text-xl font-bold mb-2">
//             {title}
//           </h3>

//           <p className="text-sm text-blue-300 leading-relaxed">
//             {main}
//           </p>
//         </div>

//         <div className="flex gap-4 mt-5">
//           <button className="flex-1 bg-[#465697] text-white py-2 rounded-full hover:opacity-90 transition">
//             Demo
//           </button>

//           <button className="flex-1 bg-[#465697] text-white py-2 rounded-full hover:opacity-90 transition">
//             Source Code
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


// import React from "react";
// import bannerImg from "../../assets/bannerImg.jpg";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <div className="w-full max-w-sm bg-[#283476] rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
//       <img src={bannerImg} alt="Project" className="w-full h-48 object-cover" />
//       <div className="p-5 flex flex-col justify-between h-64">
//         <div>
//           <h3 className="text-xl font-bold mb-2">{title}</h3>
//           <p className="text-sm text-grey-700 leading-relaxed">{main}</p>
//         </div>
//         <div className="flex gap-4 mt-5">
//           <button className="flex-1 bg-[#0a0a09] text-white py-2 rounded-full hover:opacity-90 transition">Demo</button>
//           <button className="flex-1 bg-[#040405] text-white py-2 rounded-full hover:opacity-90 transition">Source Code</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


import React from "react";
import bannerImg from "../../assets/bannerImg.jpg";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="max-w-sm bg-[#283476] rounded-2xl shadow-xl 
      hover:shadow-blue-500/30 hover:scale-105 transition animate-fadeUp">

      <img src={bannerImg} className="h-48 w-full object-cover" alt="" />

      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-2">{main}</p>

        <div className="flex gap-4 mt-5">
          <button className="flex-1 bg-black py-2 rounded-full hover:scale-105 transition">
            Demo
          </button>
          <button className="flex-1 bg-black py-2 rounded-full hover:scale-105 transition">
            Source
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
