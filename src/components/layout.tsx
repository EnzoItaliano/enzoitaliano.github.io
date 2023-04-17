import React, {ReactNode} from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
      <>
        <Navbar style={{backgroundColor: "#3E3130"}} expand="lg" variant="light">
          <Container fluid>
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="ms-auto mb-2 mb-lg-0">
                <Nav.Link >
                  <Link to="/" style={{color: "#8F6E47"}}>Home</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/projects" style={{color: "#8F6E47"}}>Projects</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </>
    )
}