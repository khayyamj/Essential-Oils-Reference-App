import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Login from '../Login/Login'
import AppContainer from '../AppContainer/AppContainer'

export default class Welcome extends React.Component {
  constructor () {
    super ()
    this.state = {
      isLoggedIn: false
    }
  }
  onLogin() {
    this.setState({ isLoggedIn: true })
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <Login onLogin={this.onLogin.bind(this)}/>
      )
    }
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
