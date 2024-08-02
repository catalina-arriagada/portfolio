//proyectos web
import React from "react";
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import InvisibleButtonCard from '../projectsComponents/InvisibleButtonCard.jsx';
import Footer from '../Footer.jsx';
import '../../styles/webs.css';

const Webs = () => {
  const BestWebProjectsArray = [
    {
      Id: 0,
      Name: `Accordion Item #1`,
      Description: `Lorem ipsum dolor sit amet, consectetur.`,
      Img: '../img/carr-1.jpg',
      Link: `https://www.google.com`,
    },
    {
      Id: 1,
      Name: `Accordion Item #2`,
      Description: `Lorem ipsum dolor sit amet.`,
      Img: `../img/carr-2.jpg`,
      Link: `https://www.google.com`,
    },
    {
      Id: 2,
      Name: `Accordion Item #3`,
      Description: `Lorem ipsum dolor sit.`,
      Img: `../img/carr-3.jpg`,
      Link: `https://www.google.com`,
    },
  ];

  const WebProjectsArray = [
    {
        Id: 4,
        Name: `Accordion Item #5`,
        Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.`,
        Img: ``,
        Link: ``,
      },
      {
        Id: 5,
        Name: `Accordion Item #6`,
        Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.`,
        Img: ``,
        Link: ``,
      },
      {
        Id: 6,
        Name: `Accordion Item #7`,
        Description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.`,
        Img: ``,
        Link: ``,
      },
  ];

  return (
    <div className="container pt-4">
      <h2 className='display-6 text-center pb-3'>Proyectos</h2>
      <Row xs={1} sm={2} lg={3} className="g-6 mb-5 mt-1">
        {BestWebProjectsArray.map((Element) => (
          <Col className="mr-3 mt-3" key={Element.Id}>
            <Card className="card-full image bg-body-secondary">
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
      {/* <Accordion defaultActiveKey="0" flush>
        {WebProjectsArray.map((Element) => (
            <Accordion.Item eventKey={Element.Id}>
                <Accordion.Header>{Element.Name}</Accordion.Header>
                <Accordion.Body>{Element.Description}</Accordion.Body>
            </Accordion.Item>
        ))}
      </Accordion> */}
      <Footer />
    </div>
  );
};

export default Webs;
