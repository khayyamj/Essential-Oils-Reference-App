import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './app/components/Welcome/Welcome'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  }
});
