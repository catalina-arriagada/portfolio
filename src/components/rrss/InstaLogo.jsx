import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../styles/footer.css';

const InstaLogoButton = ({imageInstaSource, onClick }) => {
  return (
        <Button className="rrss-btn" variant='none' onClick={onClick}>
            <Image className='rrss-image' src={imageInstaSource} alt="Instagram" fluid />
        </Button>
    );
};

export default InstaLogoButton;

//creo q div general tiene estilos predefinidos. Cambiarlos al css y ponerlos en footer.css