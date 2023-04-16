import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HomePage from "./components/pages/home/home";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container>
      <HomePage />
    </Container>
  );
}

export default App;
