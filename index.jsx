import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AphroditeTest from './Components/AphroditeTest';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AphroditeTest />
    );
  }
};

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));
});
