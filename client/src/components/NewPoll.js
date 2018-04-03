import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import axios from 'axios';

import NewPollForm from './NewPollForm';

import unAuthenticatedUserMessage from './../clientConfig/unAuthenticatedUserMessage.js';

export default class NewPoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'loggedIn': null,
      'test': 'default',
      'submissionStatus': null
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

  submissionHandler(test) {
    console.log('submissionHandler');
    this.setState({ test });
  }

  pageContent() {
    switch (this.state.submissionStatus) {
      case 'pending':
        console.log('Pending Submission');
        break;

      case 'success':
        console.log('You have successfully made a new poll!');
        console.log('Here is the link to your new poll');
        break;

      default: // do nothing, the next switch will handle this case
    }

    switch (this.state.loggedIn) {
      case true: // render a form for the new poll's creation

        const wrapper = []; // oddly only an array will allow me to pass a function to the NewPollForm
        wrapper.submissionHandler = this.submissionHandler.bind(this);

        return (
          <NewPollForm wrapper={wrapper} />
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
