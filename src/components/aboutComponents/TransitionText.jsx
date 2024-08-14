import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import Footer from '../Footer.jsx';
import "../../styles/circle.css";
import "../../styles/transition_text.css";

function TransitionText() {
  const states = [
    {
      text: `¡Hola!
        Para comenzar, da click aquí`,
      textEng: `Hi there! 
      Click here to start`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile2.jpg',
    },
    {
      text: "¡Bienvenidos a mi web personal!",
      textEng: `Welcome to my personal web!`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile3.jpg',
    },
    {
      text: "Soy Catalina, una Desarrolladora de Software Freelance.",
      textEng: `I am Catalina, a Freelance Software Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile1.png',
    },
    {
      text: "Esto significa que construyo Software Personalizado.",
      textEng: `That means I build Custom Software.`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile4.png',
    },
    {
      text: "Recibo una paga por cada proyecto terminado.",
      textEng: `I receive payment for each completed project.`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile5.png',
    },
    {
      text: "Mis proyectos van desde tiendas online, sistemas de e-commerce, pago seguro, etc.",
      textEng: `My projects range from online stores, e-commerce systems, secure payment, etc.`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile6.png',
    },
    {
      text: "Exploré muchas carreras y estudié cosas muy variadas, hasta que...",
      textEng: `I explored many careers and studied very varied things, until...`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile7.png',
    },
    {
      text: `En 2020 descubrí el mundo de la programación, y me dije: "Esto es lo mío."`,
      textEng: `In 2020 I discovered the programming world, and I told to myself: "I was born for this."`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile6.png',
    },
    {
      text: "Siempre trabajo con contrato, y mis servicios son totalmente confiables.",
      textEng: `I always work with contract, and my services are totally reliable.`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/about2.png',
    },
    {
      text: "Estoy completamente comprometida con lo que hago y amo mi trabajo.",
      textEng: `I am completely committed to what I do and I love my job.`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile10.png',
    },
    {
      text: "Si quieres saber más, visita mis redes sociales o contactate conmigo en la sección de Contacto.",
      textEng: `If you want to know more, visit my social networks, or contact me in the Contact section.`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile11.png',
    },
    {
      text: "Muchas gracias por tu interés, ¡seguiré esforzándome!",
      textEng: `Thank you very much for your interest, I will keep trying!`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile9.png',
    },
  ];

  const changeStates = () => {
    setCurrentIndex((currentIndex + 1) % states.length);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container">
      <div>
        <div className="btn-container">
          <Button
              onClick={changeStates}
              variant="none"
              className="d-flex justify-content-between align-items-center button_transition_text"
            >
              <div id="eng-p">
                <p className="circle-title">{states[currentIndex].textEng}</p>
              </div>
              <div id="heart-p">
                <p className="w-10">&#x2764;</p>
              </div>
              <div id="spa-p">
                <p className="circle-title">{states[currentIndex].text}</p>
              </div>
            </Button>
        </div>
       <div className="image-div">
          <Image
            className={states[currentIndex].classNameCaracter}
            src={states[currentIndex].srcCaracter}
          />
       </div>
      </div>

      <Footer />
    </div>
  );
}

export default TransitionText;
