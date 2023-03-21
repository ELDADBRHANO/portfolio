import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../../features/projectCard/projectCard";
import "./projects.css";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      return await fetch("http://localhost:5000/api/projects/getProjects")
        .then((response) => response.json())
        .then((response) => setProjects(response.data));
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  console.log(projects);
  return (
    <Container className="projects-container">
      <div className="projectImg-div">
        <h2 className="project-heading">Projects</h2>
      </div>
      <div className="projects-div">
        {projects?.map((project) => (
          <ProjectCard key={projects._id} data={project} />
        ))}
      </div>
      {/* </Col> */}
    </Container>
  );
};

export default Projects;
