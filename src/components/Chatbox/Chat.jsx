import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";


import ChatBox from "./ChatBox";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Sidebar/NavbarToggle"; 

export default function Chat() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 912); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="d-flex">
        <Row className={isMobile ? "navbar ms-2 mt-4" : "sidebar ms-2 mt-4"}>
          {isMobile ? <Navbar /> : <Sidebar />}
        </Row>
        <Row className="chatbox m-2 ms-4">
          <ChatBox />
        </Row>
      </div>
    </div>
  );
}
