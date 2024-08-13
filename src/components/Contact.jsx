import React, {useState} from "react";
import { Form, Col, Button} from "react-bootstrap";
import "../styles/contact.css";
import Footer from './Footer.jsx';
import axios from 'axios'

const Contact = () => {
  const [error, setError] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [isNombreValid, setIsNombreValid] = useState(true); // Estado para validez del nombre
  const [isEmailValid, setIsEmailValid] = useState(true); // Estado para validez del email
  const [isMensajeValid, setIsMensajeValid] = useState(true); // Estado para validez del mensaje

  // Definir los límites de caracteres
  const maxNombreLength = 30;
  const maxEmailLength = 30;
  const maxMensajeLength = 310;

  // Definir minimo de caracteres
  const minNombreLength = 3;
  const minEmailLength = 5;
  const minMensajeLength = 5;


  // Validar
  const validateNombre = (nombre) => {
    // Asegurar que nombre no sea undefined y trim para limpiar espacios
    nombre = nombre?.trim() || "";

    // Verificar primero si el nombre excede el límite de caracteres
    if (nombre.length > maxNombreLength) {
      setError(`Name must not exceed ${maxNombreLength} characters`);
      return false;
    }
    // Verificar primero si el nombre no alcanza el minimo de caracteres
    if (nombre.length < minNombreLength) {
      setError(`Name must contain a minimum of ${minNombreLength} characters`);
      return false;
    }

    // Verifica caracteres no permitidos
    const forbiddenCharsRegex = /[@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (forbiddenCharsRegex.test(nombre)) {
      setError("Name contains illegal characters");
      return false;
    }

    // Verifica si el nombre contiene números
    const containsNumbersRegex = /\d/;
    if (containsNumbersRegex.test(nombre)) {
      setError("Name must not contain numbers");
      return false;
    }

    // Verificar si el nombre está vacío
    if (nombre.trim().length < 0) {
      setError("Name must not be empty");
      return false;
    }

    return true;
    
  };

  const validateEmail = (email) => {
    email = email?.trim() || "";

    if (email.length > maxEmailLength) {
      setError(`Email must not exceed ${maxEmailLength} characters`);
      return false;
    }
    // Expresión regular para validar el correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Email format is not valid");
      return false;
    }

    // Verificar primero si el nombre no alcanza el minimo de caracteres
    if (email.length < minEmailLength) {
      setError(`Email must contain a minimum of ${minEmailLength} characters`);
      return false;
    }

    return true;
  };

  const validateMensaje = (mensaje) => {
    mensaje = mensaje?.trim() || "";

    if (mensaje.length > maxMensajeLength) {

      setError(`Message must not exceed ${maxMensajeLength} characters`);
      return false;
    }

    const forbiddenCharsRegex = /[#\$%\^&\*\(\)\+\=\[\]{};':"\\|,<>\/]+/;
    if (forbiddenCharsRegex.test(mensaje)) {
      setError("Message contains illegal characters");
      return false;
    }

    if (mensaje.length < minMensajeLength) {
      setError(`Message must contain a minimum of ${minMensajeLength} characters`);
      return false;
    }

    if (mensaje.trim().length < 0) {
      setError("Message must not be empty");
      return false;
    }
    return true;
  };

  

// Acciones una vez se ha validado
  const handleChangeNombre = (e) => {
    const nuevoNombre = e.target.value;
    setNombre(nuevoNombre);
    if (validateNombre(nuevoNombre)) {
      setError(""); // Limpia el error si el nombre es válido
    } 
  };

  const handleChangeEmail = (e) => {
    const nuevoEmail = e.target.value;
    setEmail(nuevoEmail);
    if (validateEmail(nuevoEmail)) {
      setError(""); // Limpia el error si el email es válido
    }
  };

  const handleChangeMensaje = (e) => {
    const nuevoMensaje = e.target.value;
    setMensaje(nuevoMensaje);
    if (validateMensaje(nuevoMensaje)) {
      setError(""); // Limpia el error si el email es válido
    }
  };

  // Acciones una vez se ha hecho click en enviar submit
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
     const form = e.currentTarget;
     if (form.checkValidity() === false) {
       e.stopPropagation();
     }
     e.preventDefault();

      if (validateNombre(nombre) && validateEmail(email) && validateMensaje(mensaje)) {
        try {
          const response = await axios.post('http://localhost:5000/contacts', {
            nombre,
            email,
            mensaje
          });
    
          console.log('Contact created:', response.data);
          alert("Contact created successfully");
    
          // Realiza las validaciones y establece el estado de validez de los campos
          const isNombreValido = validateNombre(nombre);
          const isEmailValido = validateEmail(email);
          const isMensajeValido = validateMensaje(mensaje);
          setIsNombreValid(isNombreValido); // Actualiza el estado de validez del nombre
          setIsEmailValid(isEmailValido); // Actualiza el estado de validez del email
          setIsMensajeValid(isMensajeValido); // Actualiza el estado de validez del mensaje
          alert("Form submitted successfully");
          // Limpia los campos del formulario
          setNombre("");
          setEmail("");
          setMensaje("");
          setError(""); // Limpia los mensajes de error también si es necesario
          setValidated(false); // Resetea el estado de validación
        } catch (error) {
          console.error('Error creating contact:', error);
          setError("Error creating contact");
        }
      } else {
        setError("Please, correct errors before sending.");
      }
      setValidated(true);
  };

  return (
    <div className="row p-4">
      <h2 className="display-6 text-center">Contact</h2>
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={nombre}
            placeholder="Your name"
            defaultValue=""
            className={`text-center custom-input ${validated && !isNombreValid ? 'invalid' : ''}`} // Añade clase 'invalid' si no es válido después del envío
            onChange={handleChangeNombre}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="your-email@gmail.com"
            className={`text-center custom-input ${validated && !isEmailValid ? 'invalid' : ''}`}
            value={email}
            onChange={handleChangeEmail}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            value={mensaje}
            placeholder="Write here your offers or suggestions"
            className={`text-center custom-input ${validated && !isMensajeValid ? 'invalid' : ''}`}
            onChange={handleChangeMensaje}
          />
        </Form.Group>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button className="mb-2" type="submit">
          Send
        </Button>
      </Form>

      <Footer />
    </div>
  );
};
export default Contact;
