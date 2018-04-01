import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Header from './components/Header.js';
import MyPolls from './components/MyPolls.js';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/mypolls" component={MyPolls} />
          {/* <Route path="/surveys/new" component={SurveyNew} /> */}
        </div>
      </BrowserRouter>
    );
  }
};
