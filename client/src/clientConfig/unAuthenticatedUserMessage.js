import React from 'react';
import { Row } from 'react-bootstrap';

// export default [
//   <Row><h5>You are NOT logged in!</h5></Row>,
//   <Row></Row>, // empty row for formatting
//   <Row>Only authenticated users can have or make a poll.</Row>,
//   <Row>You can vote on an existing poll, but to do anything more, you must login (Click the button in the upper right corner)</Row>
// ];

// const unAuthenticatedUserMessage = (
//   <span>
//     <Row><h5>You are NOT logged in!</h5></Row>
//     <Row></Row> {/* empty row for formatting*/}
//     <Row>Only authenticated users can have or make a poll.</Row>
//     <Row>You can vote on an existing poll, but to do anything more, you must login (Click the button in the upper right corner)</Row>
//   </span>
// );

const unAuthenticatedUserMessage = [
  <span><h5>You are NOT logged in!</h5></span>,
  <span></span>, // empty row for formatting
  <span>Only authenticated users can have or make a poll.</span>,
  <span>You can vote on an existing poll, but to do anything more, you must login (Click the button in the upper right corner)</span>
].map((element, index) => {
  return <Row id={index}>{element}</Row>;
});

export default unAuthenticatedUserMessage;
