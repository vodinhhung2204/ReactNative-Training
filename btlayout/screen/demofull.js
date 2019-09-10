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
            <View style={[styles.box, styles.box1]}><Button title="BUTTON1"></Button></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
        <View style={styles.container2}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
        <View style={styles.container3}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
        <View style={styles.container4}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
        <View style={styles.container5}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
        <View style={styles.container6}>
            <View style={[styles.box, styles.box1]}><Button title="BUTTON6"></Button></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
        <View style={styles.container7}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
        <View style={styles.container8}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
        <View style={styles.container9}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>

      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  wrapper: {
    flex: 1.35
  },
  container: {
    paddingTop:25,
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between', //replace with flex-end or center
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    borderTopWidth: 1,
  },
  container2: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
  },
  container3: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
  },
  container4: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
  },
  container5: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
  },
  container6: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
  },
  container7: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
  },
  container8: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
  },
  container9: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
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