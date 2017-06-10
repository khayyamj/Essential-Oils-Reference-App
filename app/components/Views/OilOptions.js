import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
