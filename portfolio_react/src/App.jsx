// // import { About } from "./Components/About/About";
// // import Certificates from "./Components/Certificates/Certificates";
// // import CertificatesCard from "./Components/Certificates/CertificatesCard";
// // import Footer from "./Components/Footer/Footer";
// // import Home from "./Components/Home";
// // import Navbar from "./Components/Navbar";
// // import ProjectCard from "./Components/Projects/ProjectCard";
// // import Projects from "./Components/Projects/Projects";


// // function App() {
  
// //   return <div className="bg-[#171d32] h-auto w-full overflow-hidden ">
// //     <Navbar/>
// //     <Home/>
// //     <About/>
// //     <Certificates/>
// //     <CertificatesCard/>
// //     <Projects/>
// //     <ProjectCard/>
// //     <Footer/>
  
    

// //   </div>
    
// // }

// // export default App;


// import React from "react";
// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
// import About from "./Components/About/About";
// import Certificates from "./Components/Certificates/Certificates";
// import Projects from "./Components/Projects/Projects";
// import Contact from "./Components/Contact/Contact";

// function App() {
//   return (
//     <div className="bg-[#171d32] min-h-screen w-full overflow-hidden">
//       <Navbar />
//       <Home />
//       <About />
//       <Certificates />
//       <Projects />
//       <Contact/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Certificates from "./Components/Certificates/Certificates";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="bg-[#171d32] min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
