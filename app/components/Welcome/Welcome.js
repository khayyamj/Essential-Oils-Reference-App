import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Login from '../Login/Login'

export default class Welcome extends React.Component {
  constructor () {
    super ()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <Login />
      )
    }
    return (
      <View style={styles.container}>
        <Text>Add Oils Here</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
