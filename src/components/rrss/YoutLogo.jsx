import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../styles/footer.css';

const YoutLogoButton = ({imageYoutSource, onClick }) => {
  return (
        <Button className='rrss-btn' variant='none' onClick={onClick}>
            <Image src={imageYoutSource} className='rrss-image' alt="Youtube" fluid />
        </Button>
    );
};

export default YoutLogoButton;