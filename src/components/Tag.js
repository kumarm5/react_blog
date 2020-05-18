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
            <div>
                {
                    this.state.tags.map(
                        tag => <h1>{tag.tag_name}</h1>
                    )
                }
                <p>Testing</p>
            </div>
        )
    }
}

