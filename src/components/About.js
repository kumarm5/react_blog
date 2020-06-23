import React, { Component } from 'react'
import ProfileImage from '../assets/images/img_profile.jpg'

export default class About extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
        }
    }

    handleImageLoaded() {
        this.setState({ isLoading: false });
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                <div className={isLoading ? "preloader" : "hidden"}>
                    <div id="status"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></div>
                </div>
                <div className={isLoading ? "hidden" : "fadeInTransition"}>
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
                                <h3 className="text-center">About me</h3>
                                <br />
                                <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune, Maharashtra. I have completed MCA from Pune University. I'm a passionate software developer, currently working with Python and Django. I also worked several years in industry with Java, C♯ and Javascript.</p>
                                <p>I created this blog to share some of my thoughts and experience about programming. To be honest, I'm no Python/Django expert, but we all have something good to share. Besides, we learn much more by teaching what we know.</p>
                            </div>


                            <div className="col-md-3 sidebar">
                                <div className="widget_content">
                                    <div className="widget-title">
                                        <h4>About Me</h4>
                                    </div>
                                    <div className="widget-content">
                                        <img src={ProfileImage} className="img-fluid" onLoad={this.handleImageLoaded.bind(this)}/>
                                        <h2><a href="#/about/" className="category sidebar-btn">Mukul Kumar</a></h2>
                                        <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune..</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
