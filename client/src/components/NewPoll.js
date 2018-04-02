import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import axios from 'axios';

import unAuthenticatedUserMessage from './../clientConfig/unAuthenticatedUserMessage.js';

export default class NewPoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'loggedIn': null
    };
  }

  async componentDidMount() {
    const user = (await axios.get('/auth/currentUser')
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log('error: ' + e);
        return null; // there's an error, so don't show the auth buttons in the header
      }));

    if (!user) {
      return this.setState({
        'loggedIn': false
      });
    }

    return this.setState({
      'loggedIn': true
    });
  }

  pageContent() {
    switch (this.state.loggedIn) {
      case true: // render a form for the new poll's creation
        return (
          <Row><h5>Let's make a new poll!</h5></Row>
          // form goes here
          // on submit, a function executes an axios post request with the data to /api/newPoll
          // When it is submitted, the screen gets a 'pending...' type message
          // When the response is received, the screen shows a received message
          // and displays a link to your new poll
          // OR an error message, if the poll failed to be created
          // in a .then() after the response is received, it checks the db for the poll
          // this way it is certain to be correct when it says that it was successfully made

          // And it also asks if you want to make another new poll
        );

      case false:
        return unAuthenticatedUserMessage;

      default:
        return undefined;
    }
  }

  render() {
    return (
      <Grid>
        {this.pageContent()}
      </Grid>
    );
  }
};
