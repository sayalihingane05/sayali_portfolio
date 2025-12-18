// import React from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   const projects = [
//     {
//       title: "To-Do Application",
//       main: "Full-stack app using React, Spring Boot, MySQL.",
//     },
//     {
//       title: "Weather Forecast App",
//       main: "Weather app with live API integration.",
//     },
//     {
//       title: "Daily Expenses Tracker",
//       main: "Expense management system with authentication.",
//     },
//   ];

//   return (
//     <section id="Projects" className="px-6 md:px-20 py-16 text-white">
//       <h2 className="text-4xl font-bold mb-10">Projects</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((p) => (
//           <ProjectCard key={p.title} {...p} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import ProjectCard from "./ProjectCard";

// Images directly from assets folder
import todoImg from "../../assets/todo.jpg";
import weatherImg from "../../assets/weather.jpg";
import expenseImg from "../../assets/expense.jpg";

const Projects = () => {
  const projects = [
    {
      title: "To-Do Application",
      main: "Full-stack app using React, Spring Boot, MySQL.",
      img: todoImg,
      demo: "https://your-demo-link.com",
      source: "https://github.com/your-repo-link",
    },
    {
      title: "Weather Forecast App",
      main: "Weather app with live API integration.",
      img: weatherImg,
      demo: "https://your-demo-link.com",
      source: "https://github.com/your-repo-link",
    },
    {
      title: "Daily Expenses Tracker",
      main: "Expense management system with authentication.",
      img: expenseImg,
      demo: "https://your-demo-link.com",
      source: "https://github.com/your-repo-link",
    },
  ];

  return (
    <section id="Projects" className="px-6 md:px-20 py-16 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
