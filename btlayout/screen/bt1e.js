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
            <View style={[styles.box ,styles.button1]}><Button title="BUTTON1"></Button></View>
            <View style={[styles.box , styles.button2]}><Button title="BUTTON2"></Button></View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', //replace with flex-end or center
  },
  box: {
    width: 100,
    height: 30
  },
  button1:{
      flex:1.9/3
  },
  button2:{
      flex:1/3
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  
});