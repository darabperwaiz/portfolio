import React from "react";
import { projects } from "./projectData";
import Project from "./Project/Project";
import style from "./projects.module.css";
import "./projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className={style.container}>
      <div className={style.top}>
        <h2 className={style.title}>Projects</h2>
        <Link
          className={style.btn}
          to="https://github.com/darabperwaiz?tab=repositories"
        >
          View All
        </Link>
      </div>
      <div className={style.projects}>
        {projects.map((project, index) => (
          <Project key={index} item={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
