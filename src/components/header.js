import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <Navbar
        style={{ backgroundColor: "#f4f4f1" }}
        className="justify-content-center"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              style={{ height: "45px", width: "70px" }}
              src={"./sign.png"}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Link to="/" activeClassName="active" className="nav-link">
                Maxim Godigna
              </Link>
              <Link to="/galia/" activeClassName="active" className="nav-link">
                Galia
              </Link>
              <Link
                to="/mikopuy/"
                activeClassName="active"
                className="nav-link"
              >
                Mikopüy
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
