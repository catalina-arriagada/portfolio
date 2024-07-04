import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../styles/rrss-btn.css';

const InstaLogoButton = ({imageInstaSource, onClick }) => {
  return (
        <Button className="insta-btn col-2" variant='none' onClick={onClick}>
            <Image className='insta-image' src={imageInstaSource} alt="Instagram" fluid />
        </Button>
    );
};

export default InstaLogoButton;
