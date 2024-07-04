import React from 'react';
import { Form, Col } from 'react-bootstrap';
import InstaLogoButton from './InstaLogo';
import FaceLogoButton from './FaceLogo';
//formulario validar
//poner redes sociales 

const Contact = () => {
    const handleClickInsta = () => {
        window.open("http://www.instagram.com");
      };
      const handleClickFace = () => {
        window.open("http://www.facebook.com");
    }
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
            <div className='container'>
                <InstaLogoButton imageInstaSource="./img/logoinsta192.png" onClick={handleClickInsta}/>
                <FaceLogoButton imageFaceSource="./img/logofacebook192.png" onClick={handleClickFace}/> 
            </div>
        </div>
    )
}
export default Contact;

//<div imageFaceSource="./img/logofacebook192.png" onClick={handleClickFace}></div>