import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Tag from './components/Tag';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Tag} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
