import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS
} from 'react-native'
import Home from '../Views/Home'
import OilOptions from '../Views/OilOptions'
import Ailments from '../Views/Ailments'


class AppContainer extends Component {
  constructor (props) {
    super (props)
    this.state = {
      selectedTab: 'home'
    }
  }

  render () {
    return (
      <TabBarIOS style={styles.container}>
        <TabBarIOS.Item
          title='Home'
          selected={this.state.selectedTab === 'home'}
          icon={require('../../images/icons/pointer.png')}
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
          <NavigatorIOS
            style={{
                  flex: 1
            }}
            initialRoute={{
                  component: Home,
                  title: 'Home'
            }}
          >
          </NavigatorIOS>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Oils'
          selected={this.state.selectedTab === 'oils'}
          icon={require('../../images/icons/pointer.png')}
          onPress={() => this.setState({ selectedTab: 'oils' })}
        >
          <NavigatorIOS
            style={{
                flex: 1
            }}
            initialRoute={{
                component: OilOptions,
                title: 'Oils'
            }}
          >
          </NavigatorIOS>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Ailments'
          selected={this.state.selectedTab === 'ailments'}
          icon={require('../../images/icons/pointer.png')}
          onPress={() => this.setState({ selectedTab: 'ailments' })}
        >
          <NavigatorIOS
            style={{
                flex: 1
            }}
            initialRoute={{
                component: Ailments,
                title: 'Ailments'
            }}
          >
          </NavigatorIOS>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }

} // end of AppContainer class

const styles = StyleSheet.create({
  container: {

  }
});

export default AppContainer
