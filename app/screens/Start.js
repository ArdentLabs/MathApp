import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import { TextButton } from '../components';
import { data } from '../resources';

export default class Start extends Component {
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

  render = () => {
    const { height, width } = this.state;
    const smallDimension = height > width ? width : height;
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextButton
          title='English'
          style={{
            backgroundColor: '#2196f3',
            borderWidth: 0.5,
            borderColor: 'rgb(130, 130, 130)',
            borderRadius: 5,
            color: 'white',
            height: smallDimension / 12,
            width: smallDimension / 3,
            fontSize: smallDimension / 18,
            margin: 10,
            shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowRadius: 6,
          }}
          onPress={() => navigate('English', { data: data[31] })}
        />
        <TextButton
          title='Mental Math'
          style={{
            backgroundColor: '#2196f3',
            borderWidth: 0.5,
            borderColor: 'rgb(130, 130, 130)',
            borderRadius: 5,
            color: 'white',
            height: smallDimension / 12,
            width: smallDimension / 3,
            fontSize: smallDimension / 18,
            margin: 10,
            shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowRadius: 6,
          }}
          onPress={() => navigate('MentalMath', { data: data[14] })}
        />
      </View>
    );
  }
}