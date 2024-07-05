import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import '../../styles/transition_text.css';
import MessageCircleIcon from './MessageCircleIcon';

//imagen pequeña como globo de historieta con click, y aparece imagen en grande, en carrusel. La primera imagen estara activa
//pequeño juego con letras. Cada letra de mi nombre es una foto que representa mi marca personal

//Idea final: (dev cat girl) cada letra se mueve de manera q provoca darle click (son como letras personificadas con ojos, boca, etc) y al hacerlo aparece globo historieta que al tocarla se abre la imagen  

function TransitionText() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        variant='light'
        className='button_transition_text'>
        <MessageCircleIcon />
        Hola! Soy Dev Cat!
      </Button>

      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
                Mi nombre es Catalina, y soy desarrolladora de Software Chilena, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed repellendus possimus corrupti incidunt asperiores nemo quia eum laborum hic iure, soluta fugiat assumenda reprehenderit veniam minima voluptas! Tenetur, omnis aspernatur!
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default TransitionText;