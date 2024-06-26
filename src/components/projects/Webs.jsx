//proyectos web
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../styles/webs.css";

const Webs = () => {
  const BestWebProjectsArray = [
    {
      Id: 0,
      Name: `Accordion Item #1`,
      Description: `Lorem ipsum dolor sit amet, consectetur.`,
      Img: `../img/carr-1.jpg`,
      Link: ``,
    },
    {
      Id: 1,
      Name: `Accordion Item #2`,
      Description: `Lorem ipsum dolor sit amet.`,
      Img: `../img/carr-2.jpg`,
      Link: ``,
    },
    {
      Id: 2,
      Name: `Accordion Item #3`,
      Description: `Lorem ipsum dolor sit.`,
      Img: `../img/carr-3.jpg`,
      Link: ``,
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
    
    <div className="row m-0">
      <Row xs={1} sm ={2} md={3} className="g-5 mb-5">
        {BestWebProjectsArray.map((Element) => (
          <Col key={Element.Id}>
            <Card className="image">
              <Card.Img variant='top' src={Element.Img} thumbnail fluid />
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{Element.Name}</Card.Title>
                <Card.Text className="cardText">{Element.Description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        <div></div>
      <Accordion defaultActiveKey="0" flush>
        {WebProjectsArray.map((Element) => (
            <Accordion.Item eventKey={Element.Id}>
                <Accordion.Header>{Element.Name}</Accordion.Header>
                <Accordion.Body>{Element.Description}</Accordion.Body>
            </Accordion.Item>
        ))}
      </Accordion>
        
    </div>
    
  );
};

export default Webs;
