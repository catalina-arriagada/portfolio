import React from 'react';
import { Button, Image } from 'react-bootstrap';
import '../../styles/rrss-btn.css';

const InstaLogoButton = ({imageInstaSource, onClick }) => {
  return (
        <Button className="rss-btn" variant='none' onClick={onClick}>
            <Image className='rrss-image' src={imageInstaSource} alt="Instagram" fluid />
        </Button>
    );
};

export default InstaLogoButton;
//style={{flex: '0 0 5%', maxWidth: '5%'}}