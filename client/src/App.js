import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import * as ReactBootstrap from 'react-bootstrap';

import Landing from './components/Landing';
import Header from './components/Header.js';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/surveys" component={Dashboard} /> */}
          {/* <Route path="/surveys/new" component={SurveyNew} /> */}
        </div>
      </BrowserRouter>
    );
  }
};
