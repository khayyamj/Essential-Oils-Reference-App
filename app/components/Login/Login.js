import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }
  onLoginPressed() {
    console.log('Attempting to login as ', this.state.name, ' and email: ', this.state.email)
    this.props.onLogin()
  }

  render() {
    return (
      <View style={styles.loginViewContainer}>
        <Text style={styles.loginHeaderText}>
          Essential Oils Reference Guide
        </Text>
        <Image
          style={styles.loginImage}
          source={require('../../images/Login_Pic.jpg')}
        />
        <TextInput
          onChangeText={(text) => this.setState({ name: text})}
          style={styles.loginInput}
          placeholder='Name'
        />
        <TextInput
          onChangeText={(text) => this.setState({ email: text})}
          style={styles.loginInput}
          placeholder='Email Address'
        />
        <TouchableHighlight
          onPress={this.onLoginPressed.bind(this)}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginViewContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
  },
  loginHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    height: 100,
    textAlign: 'center'
  },
  loginImage: {

  },
  loginInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC'
  },
  loginButton: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 5
  },
  loginButtonText: {
    fontSize: 24,
    color: '#FFF',
    alignSelf: 'center'
  }
})
