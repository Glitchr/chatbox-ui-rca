import React, { useEffect, useRef } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";


export default function Message({ messages }) {
  const messagesEndRef = useRef(null);

  // Group messages by day
  const groupedMessages = messages.reduce((acc, message) => {
    const messageDate = new Date(message.message_date).toLocaleDateString();
    if (!acc[messageDate]) {
      acc[messageDate] = [];
    }
    acc[messageDate].push(message);
    return acc;
  }, {});

  // Scroll to the bottom of the message list after rendering
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [groupedMessages]);

  return (
    <div className="message-container top-bottom-overflow-fade">
      <ListGroup className="message-list">
        {Object.entries(groupedMessages).map(([date, messagesForDate], dateIndex) => (
          <React.Fragment key={date}>

            <div className="date-separator mt-3">
              <span>{date}</span>
            </div>

            {messagesForDate.map((message) => (
              <ListGroup.Item
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
        <div ref={messagesEndRef} />
      </ListGroup>
    </div>
  );
}