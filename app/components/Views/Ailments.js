import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
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
        <Text style={styles.ailmentsHeaderText}>Ailments Page</Text>
        <View style={styles.ailmentsSectionContainer}>
          <Text style={styles.ailmentsSectionHeading}> Description:
            <Text style={styles.ailmentsSectionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
          </Text>
          <Text style={styles.ailmentsSectionHeading}> Essential Oils:
            <Text style={styles.ailmentsSectionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</Text>
          </Text>
          <Text style={styles.ailmentsSectionHeading}> Application / Recommendations:
            <Text style={styles.ailmentsSectionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ailmentsSectionContainer: {
    flex: 3,
    margin: 25
  },
  ailmentsSectionHeading :{
      marginTop: 10,
      fontSize: 16,
      fontWeight: '600'
  },
  ailmentsHeaderText: {
    fontSize: 30,
    fontWeight: '300',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
