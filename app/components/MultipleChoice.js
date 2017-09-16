import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import TextButton from './TextButton';

export default class MultipleChoice extends Component {
  static propTypes = {
    choices: PropTypes.array.isRequired,
    answer: PropTypes.string.isRequired,
    style: PropTypes.object,
  }
  static defaultProps = {
    style: {
      backgroundColor: 'transparent',
      buttonColor: '#2196f3',
      color: 'black',
      buttonSize: 20,
      fontSize: 20,
    },
  }

  constructor() {
    super();
    this.state = {
      value: -1,
    }
  }

  handleSubmit = () => {
    this.props.onSubmit(this.props.choices[this.state.value] === this.props.answer);
  }

  render() {
    const { value } = this.state;
    const { choices, style } = this.props;
    const emptyLambda = () => {};

    let renderedChoices = choices.map((choice, index) => 
    <RadioButton labelHorizontal={true} key={index}>
      <RadioButtonInput
        obj={{ label: choice, value: index }}
        index={index}
        isSelected={value === index}
        onPress={(value, index) => this.setState({ value })}
        buttonSize={style.buttonSize}
      />
      <RadioButtonLabel
        obj={{ label: choice, value: index }}
        index={index}
        onPress={(value, index) => this.setState({ value })}
        labelStyle={{
          lineHeight: style.fontSize * 1.2,
          fontSize: style.fontSize,
          color: style.color,
          backgroundColor: 'transparent',
        }}
      />
    </RadioButton>
    );

    return (
      <View
        style={{
          width: style.width,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
        }}
      >
        <RadioForm
          formHorizontal={false}
          animation={true}
          style={{ alignItems: 'flex-start' }}
        >
          {renderedChoices}
        </RadioForm>
        <TextButton
          title='SUBMIT'
          style={{
            backgroundColor: '#2196f3',
            borderWidth: 0.5,
            borderColor: 'rgb(130, 130, 130)',
            borderRadius: 5,
            color: 'white',
            height: style.fontSize + 5,
            width: style.fontSize * 4,
            fontSize: style.fontSize,
            margin: 10,
            shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowRadius: 6,
          }}
          disabled={value === -1}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}