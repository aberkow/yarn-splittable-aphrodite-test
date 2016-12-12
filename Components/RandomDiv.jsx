import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const divStyle = StyleSheet.create({
  mainStyleSmall: {
    backgroundColor: 'green',
    color: 'orange',
    height: '5rem',
    width: '5rem',
    margin: '0 auto',
    textAlign: 'center'
  },
  mainStyleMedium: {
    '@media screen and (min-width: 601px)': {
      color: 'white'
    }
  },
  mainStyleLarge: {
    '@media screen and (min-width: 768px)': {
      backgroundColor: 'black'
    }
  }
});

const fontStyle = StyleSheet.create({
  mainStyleSmall: {
    '@media screen and (max-width: 600px)': {
      fontFamily: 'serif'
    }
  },
  mainStyleMedium: {
    '@media screen and (min-width: 601px)': {
      fontFamily: 'sans-serif'
    }
  }
});

class RandomDiv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={css(divStyle.mainStyleSmall, divStyle.mainStyleMedium, divStyle.mainStyleLarge)}>
        <p className={css(fontStyle.mainStyleSmall, fontStyle.mainStyleMedium)}>This is a random div!</p>
      </div>
    );
  }
};

module.exports = RandomDiv;
