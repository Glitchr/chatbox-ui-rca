import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ChatsList() {
  return (
    <nav>
      <ul className="chats-list">
        <li className="mb-3 w-100">
          <Link to={`/chat/chat:business_id`}>
            <Button className="w-100 text-start" variant="light">Business 1</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`/chat/chat:business_id`}>
            <Button className="w-100 text-start" variant="light">Business 2</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`/chat/chat:business_id`}>
            <Button className="w-100 text-start" variant="light">Business 3</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`/chat/chat:business_id`}>
            <Button className="w-100 text-start" variant="light">Business 4</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
