import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ProfileImage from '../assets/images/img_profile.jpg'
import Disqus from "disqus-react"

export default class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: {},
            isLoading: true,
        }
    }

    handleImageLoaded() {
        this.setState({ isLoading: false });
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get('https://kumarm5.pythonanywhere.com/api/blog/'+id)
            .then(res => {
                const post = res.data;
                this.setState({ post });
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { post, isLoading } = this.state

        const disqusShortname = "readabilitycount" //found in your Disqus.com dashboard
        const disqusConfig = {
            url: "https://readabilitycounts.co.in/#/", //this.props.pageUrl
            identifier: this.props.id, //this.props.uniqueId
            title: "Post" //this.props.title
        }

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
                                <h2 className="text-center">{post.title}</h2>
                                <div className="post_image">
                                    <img src={post.post_image} className="mx-auto d-block img-fluid" onLoad={this.handleImageLoaded.bind(this)} />
                                </div>
                                <div className="post_description">
                                    <br />
                                    <div dangerouslySetInnerHTML={{ __html: post.description }} />
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
                                <Disqus.DiscussionEmbed
                                shortname={disqusShortname}
                                config={disqusConfig}
                                />
                            </div>
                            <div className="col-md-3 sidebar">
                                <div className="widget_content">
                                    <div className="widget-title">
                                        <h4>About Me</h4>
                                    </div>
                                    <div className="widget-content">
                                        <img src={ProfileImage} className="img-fluid" alt="Profile" />
                                        <h2><a href="#/about/" className="category sidebar-btn">Mukul Kumar</a></h2>
                                        <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune..</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
