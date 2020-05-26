import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import ProfileImage from '../assets/images/img_profile.jpg'

export default class Contact extends Component {
    render() {
        return (
            <div>
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

                            <form>
                                <div className="form-group">
                                    <label for="username">Name</label>
                                    <input type="text" id="username" name="username" placeholder="Enter your name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email address" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" placeholder="Hi Mukul"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">SEND</button>
                            </form>
                        </div>

                        <div className="col-md-3 sidebar">
                            <div className="widget_content">
                                <div className="widget-title">
                                    <h4>About Me</h4>
                                </div>
                                <div className="widget-content">
                                    <img src={ProfileImage} className="img-fluid" />
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
        )
    }
}
