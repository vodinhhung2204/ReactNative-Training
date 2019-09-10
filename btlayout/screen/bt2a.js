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
        </View>
        <View style={styles.container2}>
            <View style={[styles.box]}><Button title="BUTTON4"></Button></View>
            <View style={[styles.box]}><Button title="BUTTON5"></Button></View>
            <View style={[styles.box]}><Button title="BUTTON6"></Button></View>
        </View>
        <View style={styles.container3}>
            <View style={[styles.box]}><Button title="BUTTON7"></Button></View>
            <View style={[styles.box]}><Button title="BUTTON8"></Button></View>
            <View style={[styles.box]}><Button title="BUTTON9"></Button></View>
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
    flex: 1/3,
    flexDirection: 'row',
    justifyContent: 'space-between', //replace with flex-end or center
  },
  container2: {
    flex: 1/3,
    flexDirection: 'row',
    justifyContent: 'space-between', //replace with flex-end or center
    alignItems:'center',
  },
  container3: {
    flex: 1/3,
    flexDirection: 'row',
    justifyContent: 'space-between', //replace with flex-end or center,
    alignItems:'flex-end'
  },
  box: {
    width: 100,
    height: 30
  }
});