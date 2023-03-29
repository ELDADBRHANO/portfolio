import AboutMe from "../about/about";
import Header from "../header/header";
import { Col, Container } from "react-bootstrap";
import ProjectCard from "../../features/projectCard/projectCard";
import Projects from "../projects/projects";
import Contact from "../contact/contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {
  return (
    <Container>
      <ToastContainer position="top-left" theme="dark" />

      <Header />

      <AboutMe />

      <Projects />

      <Contact />
    </Container>
  );
};
export default HomePage;
