import React, { Component } from 'react'
import ProfileImage from '../assets/images/img_profile.jpg'
import axios from 'axios';

export default class Tag extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tag_id: 0,
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
            tag_name: ''
        };
    }

    makeHttpRequestWithPage = async ( pageNumber, tag ) => {
        await axios.get(`https://kumarm5.pythonanywhere.com/api/blog/?page=${pageNumber}&tag=${tag}`)
            .then(res => {
                this.setState({
                    posts: res.data.results,
                    count: res.data.count,
                    next: res.data.next,
                    previous: res.data.previous,
                    total_pages: res.data.total_pages,
                    page_number: res.data.page_number,
                    previous_page_num: res.data.page_number - 1,
                    next_page_num: res.data.page_number + 1,
                    tag_id: tag,
                    tag_name: res.data.results[0] ? res.data.results[0].tag : ''
                });
            })
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.makeHttpRequestWithPage(1, id)
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.match.params.id !== prevState.tag_id) {
    //         const currentId = nextProps.match.params.id;
    //         this.setState({
    //             posts: result[0],
    //             tag_id: currentId,
    //             result
    //         })
    //     }
    //     return null;
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            const currentId = nextProps.match.params.id;
            this.makeHttpRequestWithPage(1, currentId)
        }
    }

    handleImageLoaded() {
        let imgLoadCount = this.state.imageLoadCount
        this.setState({ imageLoadCount: imgLoadCount + 1 });

        this.setState({ isLoading: false });

    }

    render() {
        const { posts, count, next, previous, total_pages, page_number, previous_page_num, next_page_num, isLoading, tag_id, tag_name } = this.state
        return (
            <div>
                <div className={isLoading ? "preloader" : "hidden"}>
                    <div id="status"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></div>
                </div>
                <div className={isLoading ? "hidden" : "fadeInTransition"}>

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
                                <div className="col-md-9">
                                    <h3 class="text-center">Category: { tag_name }</h3>
                                    <br />
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
                                </div>
                            </div>

                            <div className="row">
                                <div class="col-md-9">
                                    <div class="text-center">
                                        <span className="paginate" onClick={() => this.makeHttpRequestWithPage(previous_page_num, tag_id)}>{!!(previous) ? "previous" : ""} </span>
                                        <span>
                                            Page {page_number} of {total_pages}.
                                        </span>
                                        <span className="paginate" onClick={() => this.makeHttpRequestWithPage(next_page_num, tag_id)}> {!!(next) ? "next" : ""}</span>
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
