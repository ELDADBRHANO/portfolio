import React, { useEffect, useState } from "react";
import {  Container } from "react-bootstrap";
import ProjectCard from "../../features/projectCard/projectCard";
import "./projects.css";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      return await fetch("https://portfolio-server-zz76.onrender.com/api/projects/getProjects")
        .then((response) => response.json())
        .then((response) => setProjects(response.data));
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <Container id="projects" className="projects-container">
      <div className="projectImg-div">
        <h2 className="project-heading">Projects</h2>
      </div>
      <div className="projects-div">
        {projects?.map((project) => (
          <ProjectCard key={project._id} data={project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
