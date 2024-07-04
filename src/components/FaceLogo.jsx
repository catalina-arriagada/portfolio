import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../styles/rrss-btn.css';

const FaceLogoButton = ({imageFaceSource, onClick }) => {
  return (
        <Button className='face-btn col-2' variant='none' onClick={onClick}>
            <Image src={imageFaceSource} className='face-image' alt="Facebook" fluid />
        </Button>
    );
};

export default FaceLogoButton;
