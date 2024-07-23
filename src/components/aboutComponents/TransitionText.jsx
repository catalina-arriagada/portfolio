import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import '../../styles/circle.css';
import '../../styles/transition_text.css';

//imagen pequeña como globo de historieta con click, y aparece imagen en grande, en carrusel. La primera imagen estara activa
//pequeño juego con letras. Cada letra de mi nombre es una foto que representa mi marca personal

//Idea final: (dev cat girl) cada letra se mueve de manera q provoca darle click (son como letras personificadas con ojos, boca, etc) y al hacerlo aparece globo historieta que al tocarla se abre la imagen  

function TransitionText() {

    const states = [
      {
        text: `¡Hola!
        Para comenzar, clickea aquí`,
        src: './img/circle.png',
        className: 'circle-img'
      },
      {
          text: 'Bienvenidos a mi web!',
          src: './img/circle.png',
          className: 'circle-img'
      },
      {
        text: 'Soy Dev Cat, una desarrolladora de Software.',
        src: './img/circle.png',
        className: 'circle-img'
    },
    ];

    const changeStates = () => {
        setCurrentIndex((currentIndex + 1) % states.length);
    };
    
    const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <div>
      <Button
        onClick={changeStates}
        variant='none'
        className='button_transition_text'>
        <Image className= {states[currentIndex].className} src={states[currentIndex].src}  />
        <h6 className='circle-title'>{states[currentIndex].text}</h6>
      </Button>

    </div>
  );
}

export default TransitionText;