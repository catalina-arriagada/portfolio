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
      srcText: "./img/circle.png",
      classNameText: "circle-img",
      classNameCaracter: '',
      srcCaracter: './img/about1.png',
    },
    {
      text: "Bienvenidos a mi web!",
      srcText: "./img/circle.png",
      classNameText: "circle-img",
      classNameCaracter: '',
      srcCaracter: './img/about2.png',
    },
    {
      text: "Soy Dev Cat, una desarrolladora de Software.",
      srcText: "./img/circle.png",
      classNameText: "circle-img",
      classNameCaracter: '',
      srcCaracter: './img/about3.png',
    },
  ];

  const changeStates = () => {
    setCurrentIndex((currentIndex + 1) % states.length);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Button
        onClick={changeStates}
        variant="none"
        className="button_transition_text"
      >
        <Image
          className={states[currentIndex].classNameText}
          src={states[currentIndex].srcText}
        />
        <h6 className="circle-title">{states[currentIndex].text}</h6>
      </Button>

      <Image
          className={states[currentIndex].classNameCaracter}
          src={states[currentIndex].srcCaracter}
        />

      <Footer />
    </>
  );
}

export default TransitionText;
