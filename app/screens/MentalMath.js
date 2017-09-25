import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Button,
  Keyboard,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { TextButton } from '../components';

export default class MentalMath extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    const {height, width} = Dimensions.get('window');
    this.state = {
      height,
      width,
      value: '',
      keyboardHelper: null,
    };
  }

  handleLayout = () => {
    const {height, width} = Dimensions.get('window');
    this.setState({
      height: height,
      width: width,
    });
  }

  captureView = () => {
    this.setState({
      keyboardHelper:
        <TouchableOpacity
          style={{
            position: 'absolute',
            height: this.state.height,
            width: this.state.width,
          }}
          onPress={this.releaseView}
        />,
    });
  }

  releaseView = () => {
    Keyboard.dismiss();
    this.setState({
      keyboardHelper: null,
    });
  }

  render() {
    const { height, width, value, keyboardHelper } = this.state;
    const { data } = this.props.navigation.state.params;

    const smallDimension = height > width ? width : height;

    return (
      <View
        onLayout={this.handleLayout}
        style={{
          height: height * 0.6,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {keyboardHelper}
        <Text
          style={{
            fontSize: smallDimension / 5,
          }}
        >
          A question should go here eventually!
        </Text>
      </View>
    );
  }
}

const convert = (operator) => {
  switch (operator) {
    case '*':
      return '×';
    case '/':
      return '÷';
    default:
      return operator;
  }
}