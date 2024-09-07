//proyectos web
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import InvisibleButtonCard from '../projectsComponents/InvisibleButtonCard.jsx';
import Footer from '../Footer.jsx';
import axios from 'axios';
import '../../styles/webs.css';

const Webs = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`https://portfolio-flax-mu-88.vercel.app//projects`); 
        setProjects(response.data);
      } catch (error) {
        console.error('Error al obtener los proyectos:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container pt-4">
      <h2 className='display-6 text-center pb-3'>Projects</h2>
      <Row xs={1} sm={2} lg={3} className="g-6 mb-5 mt-1">
        {projects.map((Element) => (
          <Col className="mr-3 mt-3" key={Element._id}>
            <Card className="card-full image bg-body-secondary p-1">
              <Card.Img variant='top' src={Element.img} fluid />
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{Element.name}</Card.Title>
                <Card.Text className="cardText">{Element.description}</Card.Text>
                <InvisibleButtonCard onClick={() => window.open(Element.link)} />
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
