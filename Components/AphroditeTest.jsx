import React, { Component } from 'react';

import Greeting from './Greeting';
import RandomDiv from './RandomDiv';

class AphroditeTest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Greeting />
        <RandomDiv />
      </div>
    );
  }
};

module.exports = AphroditeTest;
