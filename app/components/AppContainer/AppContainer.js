import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from '../Views/Home';
import OilOptions from '../Views/OilOptions';
import Ailments from '../Views/Ailments';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="oiloptions" component={OilOptions} title="Oil Options" />
          <Scene key="ailments" component={Ailments} title="Ailments" />
        </Scene>
      </Router>
    )
  }
}
