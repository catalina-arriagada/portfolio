//Sobre mi pagina
//Nombre y apellido, a que me dedico, resumen de mi experiencia y objetivos.

import React from 'react';
import { Image, Row, Container, Col } from 'react-bootstrap';

const About = () => {
    return(
        <div className='row'>
            <h1 className='fs-2 text-secondary fw-medium text-center mt-2'>Catalina Arriagada (Dev Cat Girl)</h1>
            <p className="text-center mt-2">Desarrolladora de Software Chilena, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed repellendus possimus corrupti incidunt asperiores nemo quia eum laborum hic iure, soluta fugiat assumenda reprehenderit veniam minima voluptas! Tenetur, omnis aspernatur!</p>
            <Container className = 'text-center mt-3 bg-body-tertiary mb-4'>
                <Row>
                    <Col>
                        <Image src="./img/profile.jpg" alt="profile" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About;