import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from '../Login/Login'

export default class OilOptions extends React.Component {
  constructor () {
    super ()
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Oil Options Page</Text>
        <Text onPress={() => Actions.productdetails()}> Product Details</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
