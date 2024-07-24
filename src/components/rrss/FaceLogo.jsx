import React from 'react';
import { Button, Image } from 'react-bootstrap';

const FaceLogoButton = ({imageFaceSource, onClick }) => {
  return (
        <Button className='rrss-btn' variant='none' onClick={onClick}>
            <Image src={imageFaceSource} className='rrss-image' alt="Facebook" fluid />
        </Button>
    );
};

export default FaceLogoButton;
