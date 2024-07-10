import React from 'react';
import VirtualChat from './VirtualChat';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import '../styles/contact.css';

const VirtualChatOpened = () => {
  return (    
    <div style={{ minHeight: '150px' }}>
    <VirtualChat />
    <Collapse dimension="width">
      <div id="example-collapse-text">
        <Card body style={{ width: '400px' }}>
            Soluta fugiat assumenda reprehenderit veniam minima voluptas! Tenetur, omnis aspernatur!
        </Card>
      </div>
    </Collapse>
  </div>
    );
};

export default VirtualChatOpened;