

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
