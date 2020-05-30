import React, { Component } from 'react'
import ProfileImage from '../assets/images/img_profile.jpg'
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            count: '',
            next: '',
            previous: '',
            total_pages: '',
            page_number: '',
            previous_page_num: '',
            next_page_num: ''
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
    }

    componentDidMount() {
        this.makeHttpRequestWithPage(1)
    }

    render() {
        const { posts, count, next, previous, total_pages, page_number, previous_page_num, next_page_num } = this.state
        return (
            <div>
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
                                <div className="col-md-9 banner_content">
                                    <a href="#/post/3/" className="category sidebar-btn">Django2-Angular5</a>
                                    <p>&nbsp;</p>

                                    <h2><p>User registration using Angular 5 http post sevice with django rest framework.</p></h2>

                                    <ul className="post_information">
                                        <li><i className="fa fa-tags"></i><a href="/#">Django</a></li>
                                        <li><i className="fa fa-calendar"></i>
                                            <time className="post-date" datetime="2017-11-11">14/04/2019</time>
                                        </li>
                                    </ul>
                                </div>
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
                                                <a href={'#/post/'+post.id}><img className="card-img-top" src={post.post_image} alt="Card image cap" /></a>
                                                <div className="card-body">
                                                    <h4><a href={'#/post/'+post.id} className="card-title">{post.title}</a></h4>
                                                    <div className="card-text blog_description"><p>{post.short_description} </p></div>
                                                    <ul className="post_information">
                                                        <li><i className="fa fa-tags"></i><a href="#">{post.tag}</a></li>
                                                        <li><i className="fa fa-calendar"></i>
                                                            <time className="post-date" datetime="2017-11-11">18/05/2019</time>
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
                                    <img src={ProfileImage} className="img-fluid" alt="Profile" />
                                    <h2><a href="#/about/" className="category sidebar-btn">Mukul Kumar</a></h2>
                                    <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune..</p>
                                </div>
                            </div>

                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div class="col-md-9">
                            <div class="text-center">
                                <span className="paginate" onClick={() => this.makeHttpRequestWithPage(previous_page_num)}>{!!(previous) ? "previous":"" } </span>
                                <span>
                                    Page {page_number} of {total_pages}.
                                </span>
                                <span className="paginate" onClick={() => this.makeHttpRequestWithPage(next_page_num)}> {!!(next) ? "next" : ""}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
