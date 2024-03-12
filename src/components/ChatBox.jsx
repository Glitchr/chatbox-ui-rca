import { useEffect, useState } from "react";
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
      <Card className="border-0 shadow-border">
        <Card.Header className="mt-2">
          <h4>Chats</h4>
        </Card.Header>
        <Card.Body>
          <Row>
              <Message messages={messages} />
          </Row>
          <Row className="w-100">
            <Col>
              <Input />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
}