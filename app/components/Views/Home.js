import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from '../Login/Login'

export default class Home extends React.Component {
  constructor () {
    super ()
    this.state = {
    }
  }
  render() {
    console.log('Home page')
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
