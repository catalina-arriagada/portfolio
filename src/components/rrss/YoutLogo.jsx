import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../styles/contact.css';

const YoutLogoButton = ({imageYoutSource, onClick }) => {
  return (
        <Button className='rss-btn' variant='none' onClick={onClick}>
            <Image src={imageYoutSource} className='rrss-image' alt="Facebook" fluid />
        </Button>
    );
};

export default YoutLogoButton;