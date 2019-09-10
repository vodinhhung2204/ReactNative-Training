import React from 'react';
import { StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation'
import AppNavigator from './AppNavigator'
import Axios from 'axios'

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {

  render() {
    return <AppContainer style={styles.container}/>
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  scrollview: {
  }
});
