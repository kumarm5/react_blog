import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Search from './components/Search';

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
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
