import AboutMe from "../about/about";
import Header from "../header/header";
import { Container } from "react-bootstrap";
const HomePage = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
    </Container>
  );
};
export default HomePage;
