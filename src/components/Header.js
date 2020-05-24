import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';

export default class Header extends Component {

    state = {
        tags: []
    }

    componentDidMount() {
        axios.get('https://kumarm5.pythonanywhere.com/api/tag/')
            .then(res => {
                const tags = res.data;
                this.setState({ tags });
            })
    }

    render() {
        return (
            <div>
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Tags" id="basic-nav-dropdown">
                                {
                                    this.state.tags.map(
                                        tag => <NavDropdown.Item href="#action/3.1">{tag.tag_name}</NavDropdown.Item>
                                    )
                                }
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
