import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ChatsList() {
  return (
    <nav>
      <h6 className="mb-3">PINNED</h6>
      <ul className="chats-list">
        <li className="mb-3 w-100">
          <Link to={`#`}>
            <Button className="w-100 text-start button-as-text active" variant="light">Business 1</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`#`}>
            <Button className="w-100 text-start button-as-text" variant="light">Business 2</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`#`}>
            <Button className="w-100 text-start button-as-text" variant="light">Business 3</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`#`}>
            <Button className="w-100 text-start button-as-text" variant="light">Business 4</Button>
          </Link>
        </li>
      </ul>
      <h6 className="mb-3 mt-4">CHAT HISTORY</h6>
      <ul className="chats-list">
        <li className="mb-3 w-100">
          <Link to={`#`}>
            <Button className="w-100 text-start button-as-text" variant="light">Business 1</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`#`}>
            <Button className="w-100 text-start button-as-text" variant="light">Business 2</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`#`}>
            <Button className="w-100 text-start button-as-text" variant="light">Business 3</Button>
          </Link>
        </li>
        <li className="mb-3 w-100">
          <Link to={`#`}>
            <Button className="w-100 text-start button-as-text" variant="light">Business 4</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
