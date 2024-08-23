import React from "react";
import Testimonials from "./components/testimonials";
import ProjectShowcase from "./components/about/education";

const Projects = () => {
  return (
    <section id="projects" className="mb-16">
      <h1 className="text-4xl">Projects</h1>

      <ProjectShowcase />

      <Testimonials />
    </section>
  );
};

export default Projects;
