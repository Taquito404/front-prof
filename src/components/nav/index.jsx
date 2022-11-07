import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../resources/Images/logo.png";
import "./nav.scss";

export default function NavBar() {
  return (
    <>
      <Navbar key={"md"} expand={"md"} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                {/* Offcanvas */}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  title={
                    <span>
                      Galería
                      <MdKeyboardArrowDown />
                    </span>
                  }
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <i class="fa fa-heart"></i>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <span>
                      Servicios
                      <MdKeyboardArrowDown />
                    </span>
                  }
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <i class="fa fa-heart"></i>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <span>
                      Sobre nosotros
                      <MdKeyboardArrowDown />
                    </span>
                  }
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <i class="fa fa-heart"></i>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <span>
                      Contacto
                      <MdKeyboardArrowDown />
                    </span>
                  }
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <i class="fa fa-heart"></i>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <button>sss</button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
