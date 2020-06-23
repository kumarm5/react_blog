import React, { Component } from 'react'

export default class Error extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
        }
    }

    componentDidMount = () => {
        this.setState({ isLoading: false });
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                <div className={isLoading ? "preloader" : "hidden"}>
                    <div id="status"><i class="fa fa-4x fa-spinner fa-spin" aria-hidden="true"></i></div>
                </div>
                <div className={isLoading ? "hidden" : "fadeInTransition"}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <br /><br /><br /><br />
                                <h1 className="text-danger"><i>Error. Page Does not Exist.!!!</i></h1>
                                <br /><br />
                                <hr />
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
