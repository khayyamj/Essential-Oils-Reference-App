import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    const goToOilOptions = () => Actions.oiloptions({text: 'Hello World!'});
    const goToAilments = () => Actions.ailments();
    return (
      <View style={{margin: 128}}>
        <Text onPress={goToOilOptions}>Click to go to Oil Options</Text>
        <Text onPress={goToAilments}>Click to go to Ailments</Text>
      </View>
    )
  }
}
