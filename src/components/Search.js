import React, { Component } from 'react'
import ProfileImage from '../assets/images/img_profile.jpg'
import Header from './Header'
import Footer from './Footer'

export default class Search extends Component {
    render() {
        return (
            <div>

                <Header />
                <div class="container">

                    <div class="row">
                        <div class="col-md-12 text-center">
                            <br />
                            <p class="text-danger"><i>Thoughts, stories and ideas.</i></p>
                            <hr />
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-9">
                            <h3 class="text-center">Search</h3>
                            <form method="POST" class="form-inline">
                                <div class="form-group mx-sm-3 mb-2">
                                    <label for="query" class="sr-only">Search</label>
                                    <input type="text" class="form-control" name="query" placeholder="Enter Search" />
                                </div>
                                <button type="submit" class="btn btn-primary mb-2">Search</button>
                            </form>

                            <div class="mx-sm-3 mb-2">

                            </div>

                        </div>

                        <div class="col-md-3 sidebar">
                            <div class="widget_content">
                                <div class="widget-title">
                                    <h4>About Me</h4>
                                </div>
                                <div class="widget-content">
                                    <img src={ProfileImage} class="img-fluid" />
                                    <h2><a href="/about/" class="category sidebar-btn">Mukul Kumar</a></h2>
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
