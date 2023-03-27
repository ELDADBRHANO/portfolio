import AboutMe from "../about/about";
import Header from "../header/header";
import { Col, Container } from "react-bootstrap";
import ProjectCard from "../../features/projectCard/projectCard";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
const HomePage = () => {
  return (
    <Container>
      <Header />

      <AboutMe />
      
      <Projects/>
      
      <Contact/>
    </Container>
  );
};
export default HomePage;
