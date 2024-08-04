//Sobre mi pagina
//Nombre y apellido, a que me dedico, resumen de mi experiencia y objetivos.

import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import TransitionText from './aboutComponents/TransitionText';

const About = () => {
    return(
        <div className='row pt-4'>
            <h2 className='col display-6 text-center'>About Me</h2>
            <Container className = 'text-center mt-3 mb-4'>
                <Row>
                    <Col>
                        <TransitionText />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About;