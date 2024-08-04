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
        Para comenzar, clickea aquí`,
      textEng: `Hi there! 
      I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile2.jpg',
    },
    {
      text: "Bienvenidos a mi web!",
      textEng: `Welcome to my web!`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile3.jpg',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile1.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile4.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile5.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile6.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile7.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile8.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile9.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile10.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile11.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      textEng: `Hi there! I'm a Junior Developer`,
      classNameCaracter: 'caracter-img',
      srcCaracter: './img/profile12.png',
    },
  ];

  const changeStates = () => {
    setCurrentIndex((currentIndex + 1) % states.length);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container">
      <div className="m-4">
          <Button
            onClick={changeStates}
            variant="none"
            className="d-flex justify-content-between align-items-center w-50 button_transition_text"
          >
          <p className="circle-title">{states[currentIndex].text}</p>
          <p className="circle-title">{states[currentIndex].textEng}</p>
        
          </Button>
      
       <div>
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
