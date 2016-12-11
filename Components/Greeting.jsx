import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  greetingContainer: {
    backgroundColor: 'red',
    color: 'white'
  },
  greetingTextHeader: {
    margin: '1rem'
  }
});

class Greeting extends Component {
  render() {
    return(
      <div className={css(styles.greetingContainer)}>
        <h1 className={css(styles.greetingTextHeader)}>Hello!</h1>
        <h2>I'm Adam</h2>
        <p>This is a test of aphrodite.js</p>
      </div>
    );
  }
};

module.exports = Greeting;
