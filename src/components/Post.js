import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ProfileImage from '../assets/images/img_profile.jpg'

export default class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get('https://kumarm5.pythonanywhere.com/api/blog/'+id)
            .then(res => {
                console.log('The log is ', res)
                const post = res.data;
                this.setState({ post });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const data = this.state.post
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
                            <h2 className="text-center">{ data.title }</h2>
                            <div className="post_image">
                                <img src={ data.post_image } className="mx-auto d-block img-fluid" />
                            </div>
                            <div className="post_description">
                                <br />
                                <div dangerouslySetInnerHTML={{ __html:data.description }} />
                            </div>
                            <br />
                            <hr />
                            <div className="float-right">
                                <span><strong>Share this post </strong></span>
                                <a href="javascript:void(0);" className="social_icon"><i className="fa fa-2x fa-facebook-square" aria-hidden="true"></i></a>
                                <a href="javascript:void(0);" className="social_icon"><i className="fa fa-2x fa-twitter-square" aria-hidden="true"></i></a>
                                <a href="javascript:void(0);" className="social_icon"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                            </div>
                            <br /><br />
                        </div>
                        <div className="col-md-3">
                            <div className="widget_content">
                                <div className="widget-title">
                                    <h4>About Me</h4>
                                </div>
                                <div className="widget-content">
                                    <img src={ProfileImage} className="img-fluid" alt="Profile" />
                                    <h2><a href="/about/" className="category sidebar-btn">Mukul Kumar</a></h2>
                                    <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune..</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
