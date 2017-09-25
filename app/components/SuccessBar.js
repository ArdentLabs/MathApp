import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class SuccessBar extends Component {
  static propTypes = {
    isCorrect: PropTypes.string.isRequired, // Either 'true' 'false' 'neither'
    textSize: PropTypes.number.isRequired,
  }

  render() {
    const { isCorrect, textSize } = this.props;

    let backgroundColor = '#2196f3';
    let text = '';
    if (isCorrect === 'true') {
      backgroundColor = 'green';
      text = 'You did it!'
    }
    else if (isCorrect === 'false') {
      backgroundColor = 'red';
      text = 'You are pathetic...'
    }

    return (
      <View
        style={{
          flex: .06,
          backgroundColor,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: textSize,
          }}
        >
          {text}
        </Text>
      </View>
    );
  }
}