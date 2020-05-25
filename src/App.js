import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
       <Route exact path="/" component={Index} />
       <Route path="/about" component={About} />
     </HashRouter>
    );
  }
}

export default App;
