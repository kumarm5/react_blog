import React, { Component } from 'react'

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
                        <div className="col-md-12 text-center">
                            <br />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
