import React, { Component } from 'react'
import ProfileImage from '../assets/images/img_profile.jpg'
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/style/style.css'

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            imageLoadCount: 0,
            posts: [],
            count: '',
            next: '',
            previous: '',
            total_pages: '',
            page_number: '',
            previous_page_num: '',
            next_page_num: '',
            latest_blog: []
        };
    }

    makeHttpRequestWithPage = async pageNumber => {
        await axios.get('https://kumarm5.pythonanywhere.com/api/blog/?page=' + pageNumber)
            .then(res => {
                this.setState({
                    posts: res.data.results,
                    count: res.data.count,
                    next: res.data.next,
                    previous: res.data.previous,
                    total_pages: res.data.total_pages,
                    page_number: res.data.page_number,
                    previous_page_num: res.data.page_number - 1,
                    next_page_num: res.data.page_number + 1
                });
            })

        await axios.get('https://kumarm5.pythonanywhere.com/api/latestblog/')
            .then(res => {
                this.setState({
                    latest_blog: res.data
                })
            })
    }

    componentDidMount() {
        this.makeHttpRequestWithPage(1)
    }

    handleImageLoaded() {
        let imgLoadCount = this.state.imageLoadCount
        this.setState({ imageLoadCount: imgLoadCount + 1 });

        if (imgLoadCount === 6) {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { posts, count, next, previous, total_pages, page_number, previous_page_num, next_page_num, isLoading, latest_blog } = this.state
        return (
            <div>
                <div className={isLoading ? "preloader" : "hidden"}>
                    <div id="status"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></div>
                </div>
                <div className={isLoading ? "hidden" : "fadeInTransition"}>

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
                                <div className="col-md-12">
                                    <div className="banner">
                                        {
                                            latest_blog.map(
                                                blog =>
                                                    <div className="col-md-9 banner_content">
                                                        <a href="#/post/3/" className="category sidebar-btn">{blog.title}</a>
                                                        <p>&nbsp;</p>

                                                        <h2><p className="font-weight-bold">{blog.short_description}</p></h2>

                                                        <ul className="post_information">
                                                            <li><i className="fa fa-tags"></i><a href="/#">{blog.tag}</a></li>
                                                            <li><i className="fa fa-calendar"></i>
                                                                <time className="post-date" datetime="2017-11-11">{blog.created_at}</time>
                                                            </li>
                                                        </ul>
                                                    </div>
                                            )
                                        }
                                    </div>
                                    <hr />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-9">
                                    {
                                        posts.map(
                                            post =>
                                                <div className="col-md-4 card_container">
                                                    <div className="card">
                                                        <a href={'#/post/' + post.id}><img className="card-img-top" src={post.post_image} alt="Card image cap" onLoad={this.handleImageLoaded.bind(this)} /></a>
                                                        <div className="card-body">
                                                            <h4><a href={'#/post/' + post.id} className="card-title">{post.title}</a></h4>
                                                            <div className="card-text blog_description"><p>{post.short_description} </p></div>
                                                            <ul className="post_information">
                                                                <li><i className="fa fa-tags"></i><a href="#">{post.tag}</a></li>
                                                                <li><i className="fa fa-calendar"></i>
                                                                    <time className="post-date" datetime="2017-11-11">{post.created_at}</time>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                        )
                                    }
                                </div>
                                <div className="col-md-3 sidebar">
                                    <div className="widget_content">
                                        <div className="widget-title">
                                            <h4>About Me</h4>
                                        </div>
                                        <div className="widget-content">
                                            <img src={ProfileImage} className="img-fluid" alt="Profile" onLoad={this.handleImageLoaded.bind(this)} />
                                            <h2><a href="#/about/" className="category sidebar-btn">Mukul Kumar</a></h2>
                                            <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune..</p>
                                        </div>
                                    </div>
                                    <hr />
                                    {
                                        latest_blog.map(
                                            blog =>
                                                <div class="widget_content">
                                                    <div class="widget-title">
                                                        <h4>Latest Post</h4>
                                                    </div>
                                                    <div class="widget-content">
                                                        <img src={blog.post_image} class="img-fluid" />
                                                        <h2><a href="/post/13/" class="category sidebar-btn">{blog.title}</a></h2>
                                                        <p>{blog.short_description}</p>
                                                    </div>
                                                </div>
                                        )
                                    }

                                </div>
                            </div>

                            <div className="row">
                                <div class="col-md-9">
                                    <div class="text-center">
                                        <span className="paginate" onClick={() => this.makeHttpRequestWithPage(previous_page_num)}>{!!(previous) ? "previous" : ""} </span>
                                        <span>
                                            Page {page_number} of {total_pages}.
                                    </span>
                                        <span className="paginate" onClick={() => this.makeHttpRequestWithPage(next_page_num)}> {!!(next) ? "next" : ""}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
