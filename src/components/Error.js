import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

export default class Error extends Component {
    render() {
        return (
            <div>
                <Header />
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
                <Footer />
            </div>
        )
    }
}
