//chatwrapper
import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Tab
} from "react-bootstrap";
import "../styles/contact.css";
import moment from "moment"; // Instala moment.js para formatear las marcas de tiempo: npm install moment

const VirtualChatOpened = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const initialMessage = {
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    setMessages([initialMessage]);
  }, []);

  // useEffect para desplazarse al final de los mensajes cuando se actualiza
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (input.trim()) {
      setLoading(true);
      const newMessage = {
        sender: "Usuario: ",
        message: input,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
      };
      setTimeout(() => {
        setMessages([...messages, newMessage]);
        setInput('');
        setLoading(false);
      }, 400);
        
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <Container className="box pb-3">
      <Row>
        <Col className="img-box">
          <header>
            <div className="inner">
              <Image
                className="inner-header-img"
                src="./img/carr-1.jpg"
                alt="Chat IA"
              />
            </div>
          </header>
        </Col>
      </Row>

      <Row className="chat-elements">
        <Col className="scrollable">
          <ListGroup>
            {messages.map((msg, index) => (
              <Tab.Content className="m-2" key={index}>
                <strong>{msg.sender}</strong> {msg.message}
                <div className="text-muted" style={{ fontSize: '0.8em' }}>
                  {msg.timestamp}
                </div>
              </Tab.Content>
            ))}
            {loading && (<span className="loader"></span>)}
            <div ref={messagesEndRef} />
          </ListGroup>
        </Col>
        
        <div className="chat-bar">      
          <Col>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje..."
              disabled={loading}
            />
          </Col>
          <Col xs="auto">
            <btn onClick={handleSendMessage} disabled={loading}>
              Enviar
            </btn>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default VirtualChatOpened;
