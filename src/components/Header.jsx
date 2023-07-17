import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    Reading Tracker
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Январь</Nav.Link>
                 </Nav>
            </Container>
        </Navbar>
    )
}