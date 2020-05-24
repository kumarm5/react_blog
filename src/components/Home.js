import React, { Component } from 'react'
import ProfileImage from '../assets/images/img_profile.jpg'

export default class Home extends Component {
    render() {
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

                    <div class="row">
                        <div class="col-md-12">
                            <div class="banner">
                                <div class="col-md-9 banner_content">
                                    <a href="/post/13/" class="category sidebar-btn">Django2-Angular5</a>
                                    <p>&nbsp;</p>

                                    <h2><p>User registration using Angular 5 http post sevice with django rest framework.</p></h2>

                                    <ul class="post_information">
                                        <li><i class="fa fa-tags"></i><a href="/#">Django</a></li>
                                        <li><i class="fa fa-calendar"></i>
                                            <time class="post-date" datetime="2017-11-11">14/04/2019</time>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-9">
                        </div>
                        <div class="col-md-3">
                            <div class="widget_content">
                                <div class="widget-title">
                                    <h4>About Me</h4>
                                </div>
                                <div class="widget-content">
                                    <img src={ProfileImage} class="img-fluid" alt="Profile" />
                                    <h2><a href="/about/" class="category sidebar-btn">Mukul Kumar</a></h2>
                                    <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune..</p>
                                </div>
                            </div>

                            <hr />
                        </div>
                        </div>

                    </div>
                </div>
                )
            }
        }
