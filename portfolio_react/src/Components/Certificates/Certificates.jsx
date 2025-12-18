// import React from "react";
// import CertificatesCard from "./CertificatesCard";

// function Certificates() {
//   return (
//     <section
//       id="Certificates"
//       className="px-6 py-14 md:px-20 text-white"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         Certificates
//       </h2>

//       {/* Responsive Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        
//         <CertificatesCard
//           title="fullstack Development"
//           issuer="Linkcode Institute"
//           year="2025"
//         />

//         <CertificatesCard
//           title="Python Development"
//           issuer="Hope Foundation"
//           year="2024"
//         />

//         <CertificatesCard
//           title="Ethical Hacking"
//           issuer="NPTEL"
//           year="2025"
//         />

//         <CertificatesCard
//           title="Cyber Security"
//           issuer="Quick Heal Foundation"
//           year="2024"
//         />
//       </div>
//     </section>
//   );
// }

// export default Certificates;

import React from "react";
import CertificatesCard from "./CertificatesCard";

const Certificates = () => {
  const certificates = [
    { title: "Fullstack Development", issuer: "Linkcode Institute", year: "2025" },
    { title: "Python Development", issuer: "Hope Foundation", year: "2024" },
    { title: "Ethical Hacking", issuer: "NPTEL", year: "2025" },
    { title: "Cyber Security", issuer: "Quick Heal Foundation", year: "2024" },
  ];

  return (
    <section id="Certificates" className="px-6 md:px-20 py-14 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {certificates.map((cert) => (
          <CertificatesCard key={cert.title} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
