//Sobre mi pagina
//Nombre y apellido, a que me dedico, resumen de mi experiencia y objetivos.

import React from 'react';
import { Image, Row, Container, Col } from 'react-bootstrap';
import TransitionText from './TransitionText';

const About = () => {
    return(
        <div className='row pt-4'>
            <h2 className='col display-6 text-center'>Catalina Arriagada (Dev Cat Girl)</h2>
            <p className="text-center mt-2"></p>
            <Container className = 'text-center mt-3 bg-body-tertiary mb-4'>
                <Row>
                    <Col>
                        <Image src="./img/profile.jpg" alt="profile" fluid />
                    </Col>
                </Row>
            </Container>
            <TransitionText />
        </div>
    )
}
export default About;