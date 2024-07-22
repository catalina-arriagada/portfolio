//chatwrapper
import React from "react";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const initialMessage = {
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    setMessages([initialMessage]);
  }, []);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        sender: "Usuario: ",
        message: input,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
      };
      setMessages([...messages, newMessage]);
      setInput("");
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
                <span class="loader"></span>
                <strong>{msg.sender}</strong> {msg.message}
                <div className="text-muted" style={{ fontSize: '0.8em' }}>
                  {msg.timestamp}
                </div>
              </Tab.Content>
            ))}
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
            />
          </Col>
          <Col xs="auto">
            <btn onClick={handleSendMessage}>
              Enviar
            </btn>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default VirtualChatOpened;
