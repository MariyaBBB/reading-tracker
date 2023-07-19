import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
    const monthId = 5;
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    Reading Tracker
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="2023" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={`/month/${0}`}>Январь</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${1}`}>Февраль</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${2}`}>Март</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${3}`}>Апрель</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${4}`}>Май</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${5}`}>Июнь</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${6}`}>Июль</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${7}`}>Август</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${8}`}>Сентябрь</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${9}`}>Октябрь</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${10}`}>Ноябрь</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={`/month/${11}`}>Декабрь</NavDropdown.Item>
                    </NavDropdown>
                 </Nav>
            </Container>
        </Navbar>
    )
}