import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../styles/rrss-btn.css';

const FaceLogoButton = ({imageFaceSource, onClick }) => {
  return (
        <Button className='rss-btn col-md-1 col-2' variant='none' onClick={onClick}>
            <Image src={imageFaceSource} className='rrss-image' alt="Facebook" fluid />
        </Button>
    );
};

export default FaceLogoButton;
