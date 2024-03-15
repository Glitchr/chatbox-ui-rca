import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from 'axios';

import Message from "./Message";
import Input from "./Input";

const client = axios.create({
  baseURL: "https://www.dev.readychatai.com",
});

export default function ChatBox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessageData = async () => {
      try {
        const response = await client.get('/messages_json');
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMessageData();
  }, []);

  return (
    <Card id="mainCard" className="shadow-border background-gradient">
      <Card.Header id="mainCardHeader" className="mt-2 d-none d-lg-block justify-content-between">
        <h5>Business 84</h5>
        
      </Card.Header>
      <Card.Body>
        <Row className="message-container">
          <Message messages={messages} />
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Input />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
