import "./about.css";
import { Image } from "react-bootstrap";
import { useState } from "react";

const AboutMe = () => {
  const [eldad, setEldad] = useState("");
  return (
    <div id="aboutMe" className="container text-center">
      <h1 className="display-4 mb-4 animate__animated animate__bounce">
        Eldad Brhano
      </h1>
      <hr className="w-25 mx-auto mb-5"></hr>
      <Image
        src="/path/to/image.jpg"
        alt="Personal Image"
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};
export default AboutMe;
