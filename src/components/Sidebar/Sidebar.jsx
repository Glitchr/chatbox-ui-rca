import { useState } from "react";
import { Form, Image, Row, Col } from "react-bootstrap";
import { GoGear } from "react-icons/go";
import { RiArrowGoBackFill } from "react-icons/ri";

import ChatsList from "./ChatLists";


export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className="me-5">
      <Row className="mb-3">
        <Col className="d-flex align-items-end">
          <div>
            <Image
                src="/cat.jpg"
                alt="Picture of a cat"
                className="roundedCircle profile-image"
              />            
          </div>
          <div>
            <h6 className="pb-1 ms-2">Username</h6>
          </div>
        </Col>   

        <Col className=" pb-1 align-self-center d-flex justify-content-end text-end icons">
          <div className="me-2">
            <RiArrowGoBackFill />
          </div>
          <div>
            <GoGear />
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Form id="search-bar" onKeyDown={handleKeyPress}>
          <Form.Control 
            type="text" 
            placeholder="Search chats" 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </Form>
      </Row>

      <Row>
        <ChatsList />
      </Row>

      <Row className="mb-2">
          <Image 
            src="/logo-seo.png"
            alt="ReadyChatAI robot logo along with the name"
            className="bottom-image"
          />
      </Row>
    </div>
  );
}
