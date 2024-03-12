import { Row } from "react-bootstrap";

import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";


export default function Chat() {
  return (
    <div>
      <div className="d-flex">
        <Row sm={9} className="sidebar p-1">
          <Sidebar />
        </Row>
        <Row className="chatbox p-2">
          <ChatBox />
        </Row>
      </div>
    </div>
  );
}