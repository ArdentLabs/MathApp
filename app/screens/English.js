import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';

import { MultipleChoice, SuccessBar } from '../components';

export default class English extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  constructor() {
    super();
    const {height, width} = Dimensions.get('window');
    this.state = {
      height,
      width,
      isCorrect: 'neither',
    };
  }

  handleLayout = () => {
    const {height, width} = Dimensions.get('window');
    this.setState({
      height: height,
      width: width,
    });
  }

  submit = (submission) => {
    if (submission) {
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
    const { height, width, isCorrect } = this.state;
    const { data } = this.props.navigation.state.params;

    console.log(data);

    const smallDimension = height > width ? width : height;

    return (
      <View
        style={{ flex: 1, }}
      >
        <View
          onLayout={this.handleLayout}
          style={{
            flex: .94,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Text
            style={{
              fontSize: smallDimension / 10,
            }}
          >
            {boldify(data.question)}
          </Text>
          <MultipleChoice
            choices={data.choices}
            answer={data.answer}
            style={{
              width: width,
              backgroundColor: 'transparent',
              buttonColor: '#2196f3',
              color: 'black',
              buttonSize: smallDimension / 16,
              fontSize: smallDimension / 16,
            }}
            onSubmit={this.submit}
          />
        </View>
        <SuccessBar
            textSize={smallDimension / 18}
            isCorrect={isCorrect}
        />
      </View>
    );
  }
}

const boldify = (text) => {
  const splitText = text.split('*');
  return splitText.map((partialText, index) =>
    <Text
      key={index}
      style={{ fontWeight: Number.isInteger(index/2) ? 'normal' : 'bold' }}
    >
      {partialText}
    </Text>
  );
}