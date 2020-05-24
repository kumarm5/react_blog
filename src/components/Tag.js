import React, { Component } from 'react'
import axios from 'axios';

export default class Tag extends Component {
    state = {
        tags: []
    }

    componentDidMount() {
        axios.get('https://kumarm5.pythonanywhere.com/api/tag/')
            .then(res => {
                const tags = res.data;
                this.setState({ tags });
            })
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-12 text-center">
                        <br/>
                        <p className="text-danger"><i>Thoughts, stories and ideas.</i></p>
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}

