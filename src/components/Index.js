import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}
