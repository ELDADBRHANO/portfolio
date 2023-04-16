import "./about.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [eldad, setEldad] = useState([]);
  const getEldadData = async () => {
    try {
      return await fetch("https://portfolio-server-zz76.onrender.com/api/eldad/getInfo")
        .then((response) => response.json())
        .then((response) => setEldad(response.data));
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getEldadData();
  }, []);
  return (
    <div id="aboutMe" className="container text-center">
      <h1 className="display-4 mb-4 animate__animated animate__bounce">
        {eldad[0]?.name}
      </h1>
      <hr className="w-25 mx-auto mb-5"></hr>
      <Container>
        <Row sm={12}>
          <Image
            src="/images/eldadImg.png"
            alt="Personal Image"
            style={{ width: "400px", height: "400px" }}
          />
          <Col className="mt-4">
            <p>{eldad[0]?.aboutMe}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutMe;
