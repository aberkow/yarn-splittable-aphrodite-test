import React, { Component } from 'react';

import Greeting from './Greeting';

class AphroditeTest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Greeting />
      </div>
    );
  }
};

module.exports = AphroditeTest;
