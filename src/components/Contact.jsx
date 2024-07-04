import React from 'react';
import { Form, Col } from 'react-bootstrap';
//formulario
//redes sociales 

const Contact = () => {
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
        </div>
    )
}
export default Contact;