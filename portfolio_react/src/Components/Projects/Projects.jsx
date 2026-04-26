


import React from "react";
import ProjectCard from "./ProjectCard";


import eventImg from "../../assets/event.jpg";
import BookImg from "../../assets/book.jpg";
import websiteImg from "../../assets/website.jpg";

const Projects = () => {
  const projects = [
  {
    title: "College Event Management ",
    main: "A full-stack web application to manage college events with features like user registration, event creation, participant tracking, and admin control panel.",
    tech: "React | Node.js | MongoDB",
    img: eventImg,
    demo: "https://college-event-management-zjh1.vercel.app",
    source: "https://github.com/your-repo-link-1",
  },
  {
    title: "Book Management System",
    main: "A dynamic web application for managing books with functionalities like adding, updating, deleting, and viewing records. Includes user-friendly interface and efficient data handling.",
    tech: "React | Node.js | MongoDB",
    img: BookImg,
    demo: "https://client-three-ecru-14.vercel.app",
    source: "https://github.com/your-repo-link-2",
  },
  {
    title: "Business Coach Website",
    main: "A modern and fully responsive business website designed for a professional coach. Features include services section, testimonials, books showcase, and event highlights with a clean and engaging UI.",
    tech: "React.js | Responsive Design",
    img: websiteImg,
    demo: "https://website-one-snowy-28.vercel.app",
    source: "https://github.com/your-repo-link-3",
  },
];

  return (
    <section id="Projects" className="px-6 md:px-20 py-16 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        My Projects
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