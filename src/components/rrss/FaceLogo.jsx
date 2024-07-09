import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../styles/contact.css';

const FaceLogoButton = ({imageFaceSource, onClick }) => {
  return (
        <Button className='rss-btn' variant='none' onClick={onClick}>
            <Image src={imageFaceSource} className='rrss-image' alt="Facebook" fluid />
        </Button>
    );
};

export default FaceLogoButton;
