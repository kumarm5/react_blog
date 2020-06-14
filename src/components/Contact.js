import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import ProfileImage from '../assets/images/img_profile.jpg'
import ReactDOM from 'react-dom';

export default class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            isLoading: true,
        }
    }

    handleImageLoaded() {
        this.setState({ isLoading: false });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://kumarm5.pythonanywhere.com/api/contact/', this.state)
            .then(response => {
                if (response.status === 201) {
                    const element = <p><i>Thank you for contacting us. We will get back to you shortly.</i></p>;
                    ReactDOM.render(element, document.getElementById('responseText'));
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { name, email, message, isLoading } = this.state

        return (
            <div>
                <div className={isLoading ? "preloader" : "hidden"}>
                    <div id="status"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></div>
                </div>
                <div className={isLoading ? "hidden" : "fadeInTransition"}>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <br />
                                <p className="text-danger"><i>Thoughts, stories and ideas.</i></p>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9">
                                <h3 className="text-center">Contact</h3>
                                <p>Hi there!</p>
                                <p>Here you can send me a message, suggest a topic you wanna read about, inform me in case you've found a bug/error, or simply say hello. Anything, really.</p>
                                <p>If you prefer, you can also send me a message directly via </p>
                                <p><a href="#">mukul@readabilitycounts.co.in</a></p>
                                <br />
                                <hr />
                                <br />

                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" name="name" value={name} placeholder="Enter your name" className="form-control" onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" value={email} placeholder="Enter your email address" className="form-control" onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control" name="message" value={message} placeholder="Hi Mukul" onChange={this.handleInputChange} ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">SEND</button>
                                    <br /><br />
                                    <div id="responseText"></div>
                                </form>
                            </div>

                            <div className="col-md-3 sidebar">
                                <div className="widget_content">
                                    <div className="widget-title">
                                        <h4>About Me</h4>
                                    </div>
                                    <div className="widget-content">
                                        <img src={ProfileImage} className="img-fluid" onLoad={this.handleImageLoaded.bind(this)} />
                                        <h2><a href="/about/" className="category sidebar-btn">Mukul Kumar</a></h2>
                                        <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune..</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
