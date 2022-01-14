/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export class Countdown extends React.Component {
  constructor() {
    super();
    this.state = { timer: 30 };
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        <span>{timer}</span>
      </div>
    );
  }
}
