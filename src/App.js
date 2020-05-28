import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Search from './components/Search';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/search" component={Search} />
            <Route exact path="/post/:id" component={Post} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
