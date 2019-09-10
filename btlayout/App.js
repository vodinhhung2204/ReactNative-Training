import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bt1a from './screen/bt1a'
import Bt1b from './screen/bt1b'
import Bt1c from './screen/bt1c'
import Bt1d from './screen/bt1d'
import Bt1e from './screen/bt1e'
import Bt1f from './screen/bt1f'
import Bt2a from './screen/bt2a'
import Bt2b from './screen/bt2b'
import Bt3a from './screen/bt3a'
import Bt3b from './screen/bt3b'


export default class App extends React.Component {
  render() {
    return (
        <Bt3b></Bt3b>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
