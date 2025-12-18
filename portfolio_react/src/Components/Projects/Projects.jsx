// import React from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white">
//       <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>

//       <div className="py-12 px-8 flex flex-wrap gap-5">
//         <ProjectCard
//           title="To-Do Application"
//           main="A full-stack To-Do app built using React, Java (Spring Boot), and MySQL. It allows users to securely log in, create, update, and delete tasks with data managed through REST APIs following MVC architecture."
//         />

//         <ProjectCard
//           title="Weather Forecast Web App"
//           main="Developed using React for frontend and Spring Boot for backend, this application fetches real-time weather data from external APIs. It displays current weather conditions with a responsive and user-friendly interface."
//         />

//         <ProjectCard
//           title="Daily Expenses Tracker"
//           main="A full-stack expense management system built with React, backend REST services, and MySQL. Users can securely track daily income and expenses, perform CRUD operations, and view expense summaries."
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <section
//       id="Projects"
//       className="p-6 sm:p-10 md:p-24 text-white"
//     >
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
//         Projects
//       </h1>

//       {/* Responsive Grid */}
//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//         <ProjectCard
//           title="To-Do Application"
//           main="A full-stack To-Do app built using React, Spring Boot, and MySQL with secure login and complete CRUD functionality."
//         />

//         <ProjectCard
//           title="Weather Forecast Web App"
//           main="A full-stack weather application using React and Spring Boot that fetches real-time weather data from external APIs."
//         />

//         <ProjectCard
//           title="Daily Expenses Tracker"
//           main="A full-stack expense management system allowing users to track income and expenses with secure authentication and summaries."
//         />
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "To-Do Application",
      main: "Full-stack To-Do app built using React, Spring Boot, and MySQL with secure login and complete CRUD functionality.",
    },
    {
      title: "Weather Forecast Web App",
      main: "A full-stack weather application using React and Spring Boot that fetches real-time weather data from external APIs.",
    },
    {
      title: "Daily Expenses Tracker",
      main: "Full-stack expense management system allowing users to track income and expenses with secure authentication and summaries.",
    },
  ];

  return (
    <section id="Projects" className="p-6 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-10">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
