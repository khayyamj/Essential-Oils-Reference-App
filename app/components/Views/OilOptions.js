import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
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
        <Image source={require('../../images/oils/lemon.jpeg')} />
        <TouchableOpacity style={styles.OilOptionsButtons} onPress={() => Actions.productdetails()}>
          <Text style={styles.OilOptionsButtonText}>Single Oils</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OilOptionsButtons} onPress={() => Actions.productdetails()}>
          <Text style={styles.OilOptionsButtonText}>Oil Blends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OilOptionsButtons} onPress={() => Actions.productdetails()}>
          <Text style={styles.OilOptionsButtonText}>Essential Oil Products</Text>
        </TouchableOpacity>
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
  OilOptionsButtons: {
    width: 300,
    height: 75,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'green'
  },
  OilOptionsButtonText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
