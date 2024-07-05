import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../styles/rrss-btn.css';

const LinkeLogoButton = ({imageLinkeSource, onClick }) => {
  return (
        <Button className='rss-btn col-md-1 col-2' variant='none' onClick={onClick}>
            <Image src={imageLinkeSource} className='rrss-image' alt="Linkedin" fluid />
        </Button>
    );
};

export default LinkeLogoButton;