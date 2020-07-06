import React, { Component } from 'react'
import { Navbar, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Footer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            show: false
        }
    }

    validate = () => {
        if (!this.state.email.includes("@")) {
            return false
        } else {
            return true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let isValid = this.validate();
        if (isValid){
            ReactDOM.render('', document.getElementById('responseText'));
            axios.post('https://kumarm5.pythonanywhere.com/api/subscribe/', this.state)
            .then(response => {
                if (response.status === 201) {
                    this.setState({ show: true })
                }
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            let element = <p><i>Invalid email. Please enter correct email.</i></p>;
            ReactDOM.render(element, document.getElementById('responseText'));
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClose = () => this.setState({ show: false })

    render() {
        const { email, show } = this.state
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
                                        <form class="form-inline" onSubmit={this.handleSubmit}>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="email" name="email" value={email} placeholder="Email Address" onChange={this.handleInputChange} />
                                            </div>
                                            <button type="submit" class="btn btn-danger subscribe-btn">Subscribe</button>
                                        </form>
                                        <div id="responseText"></div>
                                    </div>

                                    <div class="col-md-4 footer_section">
                                        <h3>ABOUT ME</h3>
                                        <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune, Maharashtra. I have completed MCA from Pune University... <a class="category" href="#/about/">Read More</a></p>
                                    </div>

                                    <div class="col-md-4 footer_section">
                                        <h3>STAY CONNECTED</h3>
                                        <a href="/#" class="social_icon"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="/#" class="social_icon"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="https://www.linkedin.com/in/mukul-kumar-927a1a131/" target="_blank" class="social_icon"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                        <a href="/#" class="social_icon"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="https://github.com/mukulkkumar/" target="_blank" class="social_icon"><i class="fa fa-github-alt" aria-hidden="true"></i></a>
                                        <a href="https://stackoverflow.com/users/12335841/mukul-kumar?tab=profile" target="_blank" class="social_icon"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
                                        <br /><br />
                                        <p><span class="social_icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>mukul@readabilitycounts.co.in</p>
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
                                <p>&copy; READABILITYCOUNTS 2020</p>
                            </div>
                        </div>
                    </div>
                </Navbar>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Body>
                        <p className="text-center"><i><u>Welcome to readabilitycounts</u></i></p>
                        <p>Thank you for your subscription..!!! Kindly check your mail for the confirmation of your subscription.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}
