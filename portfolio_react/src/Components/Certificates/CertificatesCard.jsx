// import React from "react";
// import { FaCertificate } from "react-icons/fa";

// function CertificatesCard({ title, issuer, year }) {
//   return (
//     <div className="group w-full max-w-xs bg-[#0c0e19] rounded-2xl shadow-lg shadow-slate-300/20 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
//       {/* Icon */}
//       <div className="flex justify-center mb-4">
//         <FaCertificate className="text-4xl text-[#465697] group-hover:scale-110 transition" />
//       </div>

//       {/* Content */}
//       <h3 className="text-lg font-semibold mb-2 text-white">
//         {title}
//       </h3>

//       <p className="text-sm text-blue-400">
//         {issuer}
//       </p>

//       <p className="text-xs text-white-500 mt-1">
//         {year}
//       </p>
//     </div>
//   );
// }

// export default CertificatesCard;

// import React from "react";
// import { FaCertificate } from "react-icons/fa";

// const CertificatesCard = ({ title, issuer, year }) => {
//   return (
//     <div className="group w-full max-w-xs bg-[#0c0e19] rounded-2xl shadow-lg p-6 text-center transition hover:-translate-y-2 hover:shadow-2xl">
//       <div className="flex justify-center mb-4">
//         <FaCertificate className="text-4xl text-[#465697] group-hover:scale-110 transition" />
//       </div>
//       <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
//       <p className="text-sm text-blue-400">{issuer}</p>
//       <p className="text-xs text-white mt-1">{year}</p>
//     </div>
//   );
// };

// export default CertificatesCard;


import React from "react";
import { FaCertificate } from "react-icons/fa";

const CertificatesCard = ({ title, issuer, year, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group bg-[#0c0e19] rounded-2xl p-6 text-center
      hover:-translate-y-2 hover:shadow-2xl transition animate-fadeUp"
    >
      <FaCertificate className="text-4xl mx-auto text-[#465697]" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm text-blue-400">{issuer}</p>
      <p className="text-xs mt-1">{year}</p>
    </div>
  );
};

export default CertificatesCard;
