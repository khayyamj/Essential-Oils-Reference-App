import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from '../Login/Login'

export default class Ailments extends React.Component {
  constructor () {
    super ()
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Ailments Page</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
