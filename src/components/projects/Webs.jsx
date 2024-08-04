//proyectos web
import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import InvisibleButtonCard from '../projectsComponents/InvisibleButtonCard.jsx';
import Footer from '../Footer.jsx';
import '../../styles/webs.css';

const Webs = () => {
  const BestWebProjectsArray = [
    {
      Id: 0,
      Name: `Accordion Item #1`,
      Description: `Lorem ipsum dolor sit amet, consectetur.`,
      Img: '../img/carr-1.png',
      Link: `https://primerproyectoweb-1.netlify.app/`,
    },
    {
      Id: 1,
      Name: `Accordion Item #2`,
      Description: `Lorem ipsum dolor sit amet.`,
      Img: `../img/carr-2.png`,
      Link: `https://segundoproyectoweb2.netlify.app/`,
    },
    {
      Id: 2,
      Name: `Accordion Item #3`,
      Description: `Lorem ipsum dolor sit.`,
      Img: `../img/carr-3.png`,
      Link: `https://primer-proyecto-vida.netlify.app/`,
    },
    {
      Id: 3,
      Name: `Accordion Item #3`,
      Description: `Lorem ipsum dolor sit.`,
      Img: `../img/pag-4.png`,
      Link: `https://tercerproyectoweb3.netlify.app/`,
    },
    
  ];

  return (
    <div className="container pt-4">
      <h2 className='display-6 text-center pb-3'>Proyectos</h2>
      <Row xs={1} sm={2} lg={3} className="g-6 mb-5 mt-1">
        {BestWebProjectsArray.map((Element) => (
          <Col className="mr-3 mt-3" key={Element.Id}>
            <Card className="card-full image bg-body-secondary p-1">
              <Card.Img variant='top' src={Element.Img} fluid />
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{Element.Name}</Card.Title>
                <Card.Text className="cardText">{Element.Description}</Card.Text>
                <InvisibleButtonCard onClick={() => window.open(Element.Link)} />
               </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </div>
  );
};

export default Webs;
