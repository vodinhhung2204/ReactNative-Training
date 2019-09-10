import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
 
export default class AlignItems extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
            <View style={[styles.box]}><Button title="BUTTON1"></Button></View>
            <View style={[styles.box]}><Button title="BUTTON2"></Button></View>
            <View style={[styles.box]}><Button title="BUTTON3"></Button></View>
            <View style={[styles.box]}><Button title="BUTTON4"></Button></View>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    paddingTop:25,
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between', //replace with flex-end or center
  },
  box: {
    width: 100,
    height: 30
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});