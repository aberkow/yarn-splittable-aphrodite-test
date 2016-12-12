import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const regularStyles = StyleSheet.create({
  greetingContainer: {
    backgroundColor: 'red',
    color: 'white'
  },
  greetingTextHeader: {
    margin: '1rem'
  },
  smallScreen: {
    '@media screen and (max-width: 600px)': {
      backgroundColor: 'blue'
    }
  }

});

const specialStyles = StyleSheet.create({
  onHover: {
    ':hover': {
      color: 'purple'
    }
  }
})

class Greeting extends Component {
  render() {
    return(
      <div className={css(regularStyles.greetingContainer, regularStyles.smallScreen)}>
        <h1 className={css(regularStyles.greetingTextHeader)}>Hello!</h1>
        <h2>I'm Adam</h2>
        <p className={css(specialStyles.onHover)}>This is a test of aphrodite.js</p>
      </div>
    );
  }
};

module.exports = Greeting;
