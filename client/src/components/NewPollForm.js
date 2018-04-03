import React, { Component } from 'react';
import { Well, Form, FormGroup } from 'react-bootstrap';

export default class NewPollForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'pollName': null,
      'pollOptions': []
    };
  }

  addPollName(e) {
    this.setState({ 'pollName': e.target.value });
  }

  addOption() {
    this.setState({ 'pollOptions': this.state.pollOptions.concat(document.getElementById('newPollOption').value) });
    document.getElementById('newPollOption').value = '';
  }

  removeOption(index) {
    const pollOptions = this.state.pollOptions;

    let result = [];
    for (let i = 0; i < pollOptions.length; i++) {
      if (i !== index) {
        result.push(pollOptions[i]);
      }
    }

    this.setState({ 'pollOptions': result });
  }

  getOptions() {
    if (this.state.pollOptions.length < 1) {
      return <span> You haven't added any options yet! Add some in the field below!</span>;
    }

    if (Array.isArray(this.state.pollOptions)) {
      return this.state.pollOptions.map((option, index, collection) => {
        return (
          <Well key={option} bsSize="small">
            <input type="button" value="X"
              onClick={this.removeOption.bind(this, index)}
            /> {option}
          </Well>
        );
      });
    }
  }

  newPollOptionKeyCapture(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addOption();
    }
  }

  handleSubmission(e) {
    e.preventDefault(); // Will handle this in the parent component

    const pollName = this.state.pollName;

    if ((pollName === '' || pollName === null)) {
      console.log('Poll Name can\'t be an empty string!');
      return -1;
    } else if (this.state.pollOptions.length < 2) {
      console.log('The poll MUST have a multiplicity of options!');
      return -2;
    }

    this.props.wrapper.submissionHandler(this.state.pollName, this.state.pollOptions);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmission.bind(this)}>
        <br />
        <FormGroup>
          <label>Poll Name:</label>
          <input type="text" autoFocus onChange={this.addPollName.bind(this)} placeholder="Poll Name" />
        </FormGroup>
        <FormGroup>
          <label>Current Options:</label>
          {this.getOptions()}
        </FormGroup>
        <FormGroup inline="true">
          <label>New Option Name:</label>
          <input id="newPollOption" type="text" placeholder="Poll Option" onKeyPress={this.newPollOptionKeyCapture.bind(this)} />
        </FormGroup>
        <input type="submit" />

        {/* br tags for formatting */}
        <br />
        <br />
        <br />
        <br />
        <br />
      </Form>
    );
  }
};
