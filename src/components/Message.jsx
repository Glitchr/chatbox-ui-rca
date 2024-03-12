import { ListGroup, Row, Col } from "react-bootstrap";

export default function Message({ messages }) {
  return (
    <div className="message-container">
      <ListGroup className="message-list">
        {messages.map((message) => (
          <ListGroup.Item
            key={message.id}
            className={`message ${message.sender_name === 'bot' ? 'bot' : 'other'}`}
          >
            <div className="mb-1">
            {message.reply_to_id && (
              <small>Replying to message {message.reply_to_id}</small>
            )}
            </div>

            <div className="mb-1">
              {message.sender_name === 'bot' ? (
                <strong>Bot</strong>
              ) : (
                <strong>{message.sender_name}:</strong>
              )}
            </div>
            <div className="mb-3">
              {message.message_text}
            </div>

            <Row className="d-flex justify-content-between">
              <Col md="auto">
                {message.platform && <small>Platform: {message.platform}</small>}
              </Col>
              <Col md="auto">
              {message.message_date && (
                <small>{new Date(message.message_date).toLocaleTimeString()}</small>
              )}
              </Col>
            </Row>           
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}