import React, { useEffect, useRef } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";


export default function Message({ messages }) {
  const lastMessageRef = useRef(null);

  // Scroll to the most recent messages on load
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Group messages by day
  const groupedMessages = messages.reduce((acc, message) => {
    const messageDate = new Date(message.message_date).toLocaleDateString();
    if (!acc[messageDate]) {
      acc[messageDate] = [];
    }
    acc[messageDate].push(message);
    return acc;
  }, {});

  return (
    <div className="message-container top-bottom-overflow-fade">
      <ListGroup className="message-list" ref={lastMessageRef}>
        {Object.entries(groupedMessages).map(([date, messagesForDate]) => (
          <React.Fragment key={date}>

            <div className="date-separator mt-3">
              <span>{date}</span>
            </div>

            {messagesForDate.map((message, index) => (
              <ListGroup.Item
                key={index}
                ref={index === message.length - 1 ? lastMessageRef : null}
                className={`message shadow-border ${message.sender_name === "bot" ? "bot" : "other"}`}
              >
                <div className="mb-1 bot-name-text">
                  {message.sender_name === 'bot' ? (
                    <strong>Bot</strong>
                  ) : (
                    <strong>{message.sender_name}:</strong>
                  )}
                </div>

                <div className="mb-3 bot-text">
                  {message.message_text}
                </div>

                <Row className="d-flex justify-content-between">
                  <Col md="auto">
                    {message.platform && <small><FaWhatsapp style={{ color: "green"}} /></small>}
                  </Col>
                  <Col md="auto">
                    {message.message_date && (
                      <small>{new Date(message.message_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </React.Fragment>
        ))}
      </ListGroup>
    </div>
  );
}
