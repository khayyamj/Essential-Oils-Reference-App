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
          <Text style={styles.productDetailsHeadlineText}>{this.props.product} Details Page</Text>
        </View>
        <View style={styles.productDetailsBody}>
          <Text style={styles.productDetailsBodyText}>Scientific Name: </Text>
          <Text style={styles.productDetailsBodyText}>Synonyms: </Text>
          <Text style={styles.productDetailsBodyText}>Properties: </Text>
          <Text style={styles.productDetailsBodyText}>Description: </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  productDetailsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingTop: 100
  },
  productDetailsHeadline: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    height: 100
  },
  productDetailsHeadlineImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  productDetailsHeadlineText: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 16
  },
  productDetailsBody: {
    backgroundColor: 'white',
    marginTop: 20,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  productHeadlineText: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  productDetailsBodyText: {
    paddingTop: 10,
    flexWrap: 'wrap'
  }
})
