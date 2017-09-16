import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';
import { MultipleChoice } from '../components';

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
    };
  }

  handleLayout = () => {
    const {height, width} = Dimensions.get('window');
    this.setState({
      height: height,
      width: width,
    });
  }

  render() {
    const { height, width } = this.state;
    const { data } = this.props.navigation.state.params;

    const smallDimension = height > width ? width : height;

    return (
      <View
        onLayout={this.handleLayout}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Text
          style={{
            fontSize: smallDimension / 10,
          }}
        >
          A question should go here eventually!
        </Text>
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