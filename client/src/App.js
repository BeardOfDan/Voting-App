import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Header from './components/Header.js';
import MyPolls from './components/MyPolls';
import NewPoll from './components/NewPoll';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/mypolls" component={MyPolls} />
          <Route exact path="/newpoll" component={NewPoll} />
          {/* <Route path="/username/poll/' component={Poll}" /> */}
        </div>
      </BrowserRouter>
    );
  }
};
