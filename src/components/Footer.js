import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" className="navbar navbar-footer">
                    <div className="container">
                        <div className="row ml-auto">
                            <div className="col-md-12">
                                <p>&copy; ABC XYZ 2018</p>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </div>
        )
    }
}
