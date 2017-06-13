import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

export default class ProductDetails extends Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.productDetailsContainer}>
        <View style={styles.productDetailsHeadline}>
          <Image
            source={require('../../../app/images/oils/lemon.jpeg')}
            style={styles.productDetailsHeadlineImage} />
          <Text>{this.props.product} Details Page</Text>
        </View>
        <View style={styles.productDetailsBody}>
          <Text>Scientific Name: </Text>
          <Text>Synonyms: </Text>
          <Text>Properties: </Text>
          <Text>Description: </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  productDetailsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  productDetailsHeadline: {
    flexDirection: 'row',
    height: 100
  },
  productDetailsHeadlineImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  productHeadlineText: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})
