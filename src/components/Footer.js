import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div className="row">
                                    <div class="col-md-4 footer_section">
                                        <h3>SUBSCRIBE NOW</h3>
                                        <p>Subscribe to our mailing list to receive the updates of website.</p>
                                        <br />
                                        <form class="form-inline">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="email" placeholder="Email Address" />
                                            </div>
                                            <button type="submit" class="btn btn-danger">Subscribe</button>
                                        </form>
                                    </div>

                                    <div class="col-md-4 footer_section">
                                        <h3>ABOUT ME</h3>
                                        <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune, Maharashtra. I have completed MCA from Pune University... <a class="category" href="/about/">Read More</a></p>
                                    </div>

                                    <div class="col-md-4 footer_section">
                                        <h3>STAY CONNECTED</h3>
                                        <a href="/#" class="social_icon"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="/#" class="social_icon"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="/#" class="social_icon"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                        <a href="/#" class="social_icon"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="/#" class="social_icon"><i class="fa fa-github-alt" aria-hidden="true"></i></a>
                                        <br /><br />
                                        <p><span class="social_icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>email: mukul@readabilitycounts.co.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
