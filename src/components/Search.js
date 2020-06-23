import React, { Component } from 'react'
import ProfileImage from '../assets/images/img_profile.jpg'
import axios from 'axios';

export default class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            query: '',
            isLoading: true,
        }
    }

    handleImageLoaded() {
        this.setState({ isLoading: false });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state.query
        axios.get('https://kumarm5.pythonanywhere.com/api/blog/?query=' + data)
            .then(response => {
                const posts = response.data.results;
                this.setState({ posts });
            })
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { posts, query, isLoading } = this.state
        return (
            <div>
                <div className={isLoading ? "preloader" : "hidden"}>
                    <div id="status"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></div>
                </div>
                <div className={isLoading ? "hidden" : "fadeInTransition"}>
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
                            <form method="POST" class="form-inline" onSubmit={this.handleSubmit}>
                                <div class="form-group mx-sm-3 mb-2">
                                    <label for="query" class="sr-only">Search</label>
                                    <input type="text" class="form-control" name="query" value={query} placeholder="Enter Search" onChange={this.handleInputChange} />
                                </div>
                                <button type="submit" class="btn btn-primary mb-2">Search</button>
                            </form>

                            <div class="mx-sm-3 mb-2">
                                {
                                    posts.map(
                                        post =>
                                            <p key={post.id}><a href={'#/post/'+post.id}>{post.title}</a></p>
                                    )
                                }
                            </div>

                        </div>

                        <div class="col-md-3 sidebar">
                            <div class="widget_content">
                                <div class="widget-title">
                                    <h4>About Me</h4>
                                </div>
                                <div class="widget-content">
                                    <img src={ProfileImage} class="img-fluid" alt="pictures" onLoad={this.handleImageLoaded.bind(this)} />
                                    <h2><a href="#/about/" class="category sidebar-btn">Mukul Kumar</a></h2>
                                    <p>My name is Mukul Kumar, I'm a software developer and technology enthusiast from India. At the moment, I'm living in Pune..</p>
                                </div>
                            </div>

                            <hr />

                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
