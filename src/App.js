import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Search from './components/Search';
import Post from './components/Post';
import Error from './components/Error';
import Tag from './components/Tag';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/search" component={Search} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/tag/:id" component={Tag} />
            <Route component={Error}/>
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
