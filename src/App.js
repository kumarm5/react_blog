import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Tag from './components/Tag';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Tag} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
