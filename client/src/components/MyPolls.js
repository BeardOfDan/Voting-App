import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import axios from 'axios';

import unAuthenticatedUserMessage from './../clientConfig/unAuthenticatedUserMessage.js';

export default class MyPolls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'isLoggedIn': null,
      'hasMessage': false,
      'message': []
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
        'isLoggedIn': false,
        'hasMessage': true,
        'message': unAuthenticatedUserMessage
      });
    }

    this.setState({
      'isLoggedIn': true,
      'hasMessage': (user.polls.length > 0) ? true : false,
      'message': user.polls
    });
  }

  renderPolls() {
    switch (this.state.isLoggedIn) { // handle authentication status
      case false:
        return unAuthenticatedUserMessage;

      case true: // do nothing
      default: // do nothing until it's known if the user is logged in or not
    }

    switch (this.state.hasMessage) { // handle poll population
      case false:
        return [
          <Row><h5>You don't have any polls!</h5></Row>,
          <Row><h5><a href="/newPoll">Make my first poll!</a></h5></Row>
        ];

      case true:
        return this.state.message.map((poll) => {
          return (
            <Row><a href={`/poll/${poll.name}`}>{poll.name}</a></Row>
          );
        });

      default: // don't render anything until it's known if they have any polls
        return undefined;
    }
  }

  render() {
    return (
      <Grid>
        {this.renderPolls()}
      </Grid>
    );
  }
};
