import './projectCard.css'
import React from 'react';
import { Card, Button,Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ProjectCard = ({ data}) => {
  return (
    <Card className="d-flex align-items-center mainCard">
      <Card.Img variant="top" className="CardCircleLogo" src={data?.img} />
      <Card.Body>
        <Card.Title className="cardTitle">{data?.title}</Card.Title>
        <Card.Text>
          {data?.desc}
        </Card.Text>
        <a href={data?.githubLink}>
        <Button variant="outline-success" size="sm">Github</Button></a>{' '}
        <a href={data?.url}>
        <Button variant="outline-danger" size="sm">Live</Button>
        </a>
      </Card.Body>
    </Card>
    // <div className="d-flex align-items-center mainCard">
    //       <Image src={data?.img} className="CardCircleLogo" />
    //       <h4 className="cardTitle">{data?.title}</h4>
    //       <p>{data?.desc}</p>
    //       <Button>{data?.url}</Button>
    //       <Button>{data?.githubLink}</Button>
    // </div>
  );
};

export default ProjectCard;