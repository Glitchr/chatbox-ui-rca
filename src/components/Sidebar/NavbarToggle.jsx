import { useState } from "react";
import { Navbar, Offcanvas, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";



export default function NavbarToggle() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleSidebar} />
          <Navbar.Brand>Business 84</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Offcanvas className="small-sidebar" show={showSidebar} onHide={() => setShowSidebar(false)}>
                <Sidebar />
              </Offcanvas>
            </Navbar.Collapse>
        </Container>
      </Navbar>    
    </>
  );
}
