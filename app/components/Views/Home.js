import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
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
        <Text style={styles.homeText}>Home Page</Text>
        <Image source={require('../../images/icons/pointer.jpg')} />
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
  homeText: {
    fontSize: 100,
    height: 400,
    width: 100,
    color: 'red'
  }
});
