import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
const oils = require('../data/oils');
const Images = require('../../images/oils/oilImages'); // images are bundled and must have a static reference

export default class ProductDetails extends Component {
  constructor (props) {
    super (props);
    this.state = {
      oils: oils.oils
    }
    this.displayOils = this.displayOils.bind(this)
  }

  displayOils () {
    return this.state.oils.map(oil => {
      console.log('oil -> ', oil.name)
      const images = Images.default
      console.log(images)
      return (
        <View style={styles.listDetailsHeadline}>
          <Image
            source={images[oil.name]}
            style={styles.listDetailsHeadlineImage} />
          <Text style={styles.listDetailsHeadlineText}>{oil.name}</Text>
          <Text>TEXT</Text>
        </View>
        )
    })
  }

  render() {
    return (
      <View style={styles.listDetailsContainer}>
        {this.displayOils()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listDetailsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 50,
    paddingTop: 100,
    borderColor: 'black',
    borderWidth: 2
  },
  listDetailsHeadline: {
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'center',
    height: 100,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
  listDetailsHeadlineImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  listDetailsHeadlineText: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 16
  }
})
