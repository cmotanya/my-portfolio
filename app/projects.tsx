import React from "react";
import { Bebas_Neue } from "next/font/google";
import { InView } from "./components/in-view";
import { cn } from "./utils/cn";

const Testimonials = React.lazy(() => import("./components/project/testimonials"));
const ProjectShowcase = React.lazy(
  () => import("./components/project/project-showcase"),
);

const neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

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
        viewOptions={{ margin: "0px 0px -100px 0px" }}
      >
        <h1 className={cn("mb-4 text-6xl uppercase", neue.className)}>
          Projects
        </h1>

        <ProjectShowcase />

        <Testimonials />
      </InView>
    </section>
  );
};

export default Projects;
