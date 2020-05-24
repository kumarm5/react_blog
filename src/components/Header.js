import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Tags" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Python</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Javascript</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">About me</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
