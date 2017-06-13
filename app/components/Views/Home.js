import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  // buttonOptions () {
  //   const pageOptions = [
  //     {
  //       buttonTitle: '2 Oil Options',
  //       page: goToOilOptions(),
  //       styles: [styles.homePageOptionsText, styles.backgroundColorRed]
  //     },
  //     {
  //       buttonTitle: 'Ailments',
  //       page: goToAilments(),
  //       styles: [styles.homePageOptionsText, styles.backgroundColorBlue]
  //     },
  //     {
  //       buttonTitle: 'Education',
  //       page: goToOilOptions(),
  //       styles: [styles.homePageOptionsText, styles.backgroundColorRed]
  //     },
  //     {
  //       buttonTitle: 'Social',
  //       page: goToOilOptions(),
  //       styles: [styles.homePageOptionsText, styles.backgroundColorRed]
  //     },
  //     {
  //       buttonTitle: 'Button 5',
  //       page: goToOilOptions(),
  //       styles: [styles.homePageOptionsText, styles.backgroundColorRed]
  //     },
  //     {
  //       buttonTitle: 'Button 6',
  //       page: goToOilOptions(),
  //       styles: [styles.homePageOptionsText, styles.backgroundColorRed]
  //     }
  //   ];
  //   pageOptions.map(button => {
  //     return (
  //       <TouchableOpacity
  //         onPress={button.page}
  //         style={button.style} >
  //         <Text style={styles.homePageOptionsText}>{button.buttonTitle}</Text>
  //       </TouchableOpacity>
  //     )
  //   })
  // }

  render() {
    const goToOilOptions = () => Actions.oiloptions({text: 'Hello World!'});
    const goToAilments = () => Actions.ailments();

    return (
      <View style={styles.homePageContainer}>
        <View style={styles.homePageHeader}>
          <Text style={styles.homePageHeaderText}>Essential Oils</Text>
          <Text style={styles.homePageHeaderText}>Reference Guide</Text>
          <Image source={require('../../images/oils/lemon.jpeg')} />
        </View>
        <View style={styles.homePageOptions}>
          <TouchableOpacity
            onPress={goToOilOptions}
            style={[styles.homePageOptionsButton, styles.backgroundColorRed]}
          >
            <Text style={styles.homePageOptionsText}>Oil Options</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToAilments}
            style={[styles.homePageOptionsButton, styles.backgroundColorBlue]}
          >
            <Text style={styles.homePageOptionsText}>Ailments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToOilOptions}
            style={[styles.homePageOptionsButton, styles.backgroundColorRed]}
          >
            <Text style={styles.homePageOptionsText}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToAilments}
            style={[styles.homePageOptionsButton, styles.backgroundColorBlue]}
          >
            <Text style={styles.homePageOptionsText}>Social</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToOilOptions}
            style={[styles.homePageOptionsButton, styles.backgroundColorRed]}
          >
            <Text style={styles.homePageOptionsText}>Button 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToAilments}
            style={[styles.homePageOptionsButton, styles.backgroundColorBlue]}
          >
            <Text style={styles.homePageOptionsText}>Button 6</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1
  },
  homePageHeader: {
    alignItems: 'center',
    marginTop: 100
  },
  homePageHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  homePageOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  homePageOptionsButton: {
    width: 150,
    height: 75,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  homePageOptionsText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  backgroundColorRed: {
    backgroundColor: 'red'
  },
  backgroundColorBlue: {
    backgroundColor: 'blue'
  }
})
