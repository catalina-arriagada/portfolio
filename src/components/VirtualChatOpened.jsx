//chatwrapper
import React from 'react';
import { useState, useEffect  } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Image } from 'react-bootstrap';
import '../styles/contact.css';
import moment from 'moment'; // Instala moment.js para formatear las marcas de tiempo: npm install moment


const VirtualChatOpened = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [autoMessage, setAutoMessage] = useState(false);

  useEffect(() => {
    let interval;
    if (autoMessage) {
      interval = setInterval(() => {
        const newMessage = {
          timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }, 2500); // Enviar un mensaje cada 5 segundos
    }
    return () => clearInterval(interval);
  }, [autoMessage]);


  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        sender: 'Usuario',
        message: input,
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <Container className='box'>
      <Row>
        <Col className='img-box'>
          <header>
            <div className="inner">
              <Image className='inner-header-img' src='./img/carr-1.jpg' alt="Chat IA" />
            </div>
          </header>
        </Col>
      </Row>

      <Row>
        <Col className='scrollable'>
            <h2>Chat</h2>
          <ListGroup>
            {messages.map((msg, index) => (
              <div className="chat-container">
                <ListGroup.Item key={index}>
                  <strong>{msg.sender}:</strong> {msg.message}
                  <div className="text-muted" style={{ fontSize: '0.8em' }}>
                    {msg.timestamp}
                  </div>
                </ListGroup.Item>
                <div className="chat_timestamp" style={{ fontSize: '0.8em' }}>
                {msg.timestamp}||
                </div>
                <ListGroup.Item key={index}>
                  <strong>{msg.sender}:</strong> {msg.message}
                </ListGroup.Item>
              </div>
              
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Form.Control
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
        </Col>
        <Col xs="auto">
          <Button onClick={handleSendMessage} variant="primary">
            Enviar
          </Button>
          <Button
            onClick={() => setAutoMessage(!autoMessage)}
            variant={autoMessage ? 'danger' : 'success'}
          >
            {autoMessage ? 'Detener Mensajes Automáticos' : 'Iniciar Mensajes Automáticos'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
  
};

export default VirtualChatOpened;