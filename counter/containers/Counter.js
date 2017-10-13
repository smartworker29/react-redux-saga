import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Counter extends React.Component {
  render() {
    return (
        <View style={stylesheet.container}>
          <Text>Start for react-native and redux</Text>
        </View>
    );
  }
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});