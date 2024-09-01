import React from "react";
import Testimonials from "./components/testimonials";
import ProjectShowcase from "./components/about/project-showcase";
import { InView } from "./components/in-view";

const Projects = () => {
  return (
    <section id="projects">
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -350px 0px" }}
      >
        <h1 className="text-4xl">Projects</h1>

        <ProjectShowcase />

        <Testimonials />
      </InView>
    </section>
  );
};

export default Projects;
