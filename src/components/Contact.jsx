import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import InstaLogoButton from "./rrss/InstaLogo";
import FaceLogoButton from "./rrss/FaceLogo";
import LinkeLogoButton from "./rrss/LinkeLogo";
import YoutLogoButton from "./rrss/YoutLogo";
import { useState } from "react";
import VirtualChat from "./VirtualChat";

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
  const handleClickChat = () => {
    window.open("http://www.google.com");
  };
  const handleMouseOverChat = () => {
    <VirtualChat />
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Expresión regular para validar el correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError("Email no es válido");
    } else {
      setError("");
    }
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (validateEmail(email)) {
      //alert('Email es válido');
    } else {
      setError("Email no es válido");
    }

    setValidated(true);
  };

  return (
    <div className="row p-4">
      <h2 className="display-6 text-center">Contacto</h2>
      <Form
        xs={3}
        className="form-contact text-center mt-5 col"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group
          as={Col}
          rows={3}
          controlId="validationCustom01"
          className="mb-4"
        >
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tu nombre"
            defaultValue=""
            className="text-center"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="tuemail@gmail.com"
            className="text-center"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Escribe aquí tus sugerencias y propuestas"
            className="text-center"
          />
        </Form.Group>
        <Button className="mb-2" type="submit">
          Enviar
        </Button>
      </Form>
      <div className="rrss-div">
        <h6 className="rrss-title">Redes sociales</h6>
        <Row xs={4}>
          <InstaLogoButton
            imageInstaSource="./img/logoinsta192.png"
            onClick={handleClickInsta}
          />
          <FaceLogoButton
            imageFaceSource="./img/logofacebook192.png"
            onClick={handleClickFace}
          />
          <LinkeLogoButton
            imageLinkeSource="./img/logolinkedin192.png"
            onClick={handleClickLinkedin}
          />
          <YoutLogoButton
            imageYoutSource="./img/logoyoutube192.png"
            onClick={handleClickYoutube}
          />
        </Row>
      </div>
      <VirtualChat
        imageChatSource="./img/chat-an.png"
        onClick={handleClickChat}
        onMouseOver={handleMouseOverChat}
      />
    </div>
  );
};
export default Contact;
