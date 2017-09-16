import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Start, MentalMath, English } from './screens';

export default Root = StackNavigator({
  Start: {
    screen: Start,
    navigationOptions: {
      title: 'Welcome!',
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    },
  },
  MentalMath: {
    screen: MentalMath,
    navigationOptions: ({ navigation }) => ({
      title: 'Level ' + navigation.state.params.data.level + ' ' + navigation.state.params.data.type,
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    }),
  },
  English: {
    screen: English,
    navigationOptions: ({ navigation }) => ({
      title: 'Level ' + navigation.state.params.data.level + ' ' + navigation.state.params.data.type,
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    }),
  },
})