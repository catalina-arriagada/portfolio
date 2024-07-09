import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../styles/contact.css';

const LinkeLogoButton = ({imageLinkeSource, onClick }) => {
  return (
        <Button className='rss-btn' variant='none' onClick={onClick}>
            <Image src={imageLinkeSource} className='rrss-image' alt="Linkedin" fluid />
        </Button>
    );
};

export default LinkeLogoButton;