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

import { TextButton, SuccessBar } from '../components';

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
      isCorrect: 'neither',
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

  handleSubmit = () => {
    const { value } = this.state;
    const { data } = this.props.navigation.state.params;

    let result = null;
    switch (data.operator) {
      case '+':
        result = data.num1 + data.num2;
        break;
      case '-':
        result = data.num1 - data.num2;
        break;
      case '*':
        result = data.num1 * data.num2;
        break;
      case '/':
        result = data.num1 / data.num2;
        break;
    }

    if (value === result) {
      this.setState({
        isCorrect: 'true',
      });
    }
    else {
      this.setState({
        isCorrect: 'false',
      });
    }
  }

  render() {
    const {
      height,
      width,
      value,
      keyboardHelper,
      isCorrect
    } = this.state;
    const { data } = this.props.navigation.state.params;

    const smallDimension = height > width ? width : height;

    return (
      <View
        style={{ flex: 1, }}
      >
        <View
          onLayout={this.handleLayout}
          style={{
            flex: 0.94,
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
            {data.num1 + ' ' + convert(data.operator) + ' ' + data.num2 + ' ='}
          </Text>
          <View>
            <TextInput
              style={{
                height: smallDimension / 16,
                width: smallDimension / 4,
                fontSize: smallDimension / 22,
                backgroundColor: 'white',
                borderWidth: 0.5,
                borderColor: 'rgb(130, 130, 130)',
                borderRadius: 5,
                alignSelf: 'center',
                textAlign: 'center',
                shadowColor: 'black',
                shadowOpacity: 0.1,
                shadowRadius: 6,
              }}
              placeholder='ANSWER'
              underlineColorAndroid='transparent'
              onChangeText={(value) => this.setState({ value })}
              onFocus={this.captureView}
              value={value}
            />
            <TextButton
              title='SUBMIT'
              style={{
                backgroundColor: '#2196f3',
                borderWidth: 0.5,
                borderColor: 'rgb(130, 130, 130)',
                borderRadius: 5,
                color: 'white',
                height: smallDimension / 16,
                width: smallDimension / 4,
                fontSize: smallDimension / 22,
                margin: 10,
                shadowColor: 'black',
                shadowOpacity: 0.1,
                shadowRadius: 6,
              }}
              disabled={value === ''}
              onPress={this.handleSubmit}
            />
          </View>
        </View>
        <SuccessBar
          textSize={smallDimension /18}
          isCorrect={isCorrect}
        />
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