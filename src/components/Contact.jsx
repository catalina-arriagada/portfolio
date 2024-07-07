import React from 'react';
import { Form, Col, Container, Row } from 'react-bootstrap';
import InstaLogoButton from './rrss/InstaLogo';
import FaceLogoButton from './rrss/FaceLogo';
import LinkeLogoButton from './rrss/LinkeLogo';
import YoutLogoButton from './rrss/YoutLogo';
//formulario validar
//organizar grid de rrss
//personalizar estilo caja rrss (color pastel, adornos)

const Contact = () => {
    const handleClickInsta = () => {
        window.open("http://www.instagram.com");
      };
      const handleClickFace = () => {
        window.open("http://www.facebook.com");
      };
      const handleClickLinkedin = () => {
        window.open("http://www.linkedin.com");
      };
      const handleClickYoutube = () => {
        window.open("http://www.youtube.com");
      };

    return(
        <div className='row pt-4'>
            <h2 className='col display-6 text-center'>Contacto</h2>
            <Form className='text-center mt-5'>
                <Form.Group as={Col} rows={3} controlId="validationCustom01" className="mb-4">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Tu nombre"
                        defaultValue=""
                        className='text-center'
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="tuemail@gmail.com" className='text-center' />
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Escribe aquí tus sugerencias y propuestas' className='text-center' />
                </Form.Group>
            </Form>
            <div className='rrss-div'>
                <h6 className='rrss-title'>Redes sociales</h6>
                <Row xs={4}>
                    <InstaLogoButton imageInstaSource="./img/logoinsta192.png" onClick={handleClickInsta}/>
                    <FaceLogoButton imageFaceSource="./img/logofacebook192.png" onClick={handleClickFace}/> 
                    <LinkeLogoButton imageLinkeSource="./img/logolinkedin192.png" onClick={handleClickLinkedin}/> 
                    <YoutLogoButton imageYoutSource="./img/logoyoutube192.png" onClick={handleClickYoutube}/> 
                </Row>
            </div>
        </div>
    )
}
export default Contact;