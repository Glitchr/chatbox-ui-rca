import { useState } from "react";
import { Form, FloatingLabel, Card, Row, Col} from "react-bootstrap";
import ChatsList from "./ChatLists";

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="p-4">
        <Col>
          <img 
            src="/logo-seo.png"
            alt="ReadyChatAI robot logo along with the name"
            className="logo"
          />
        </Col>

        <hr/>

        <Col>
          <Form id="search-bar" onKeyDown={handleKeyPress}>
            <FloatingLabel
              controlId="searchBar"
              label="Search chats"
              className="mb-3 floating-label-form"
            >
              <Form.Control type="text" placeholder="Search chats" onChange={(e) => setSearchTerm(e.target.value)} />
            </FloatingLabel>
          </Form>
        </Col>
        <Col>
          <ChatsList />
        </Col>
      </div>
    </div>
  );
}