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
        </View>
        <View style={styles.container2}>
            <View style={[styles.box, styles.box2]}><Button title="BUTTON2"></Button></View>
        </View>
        <View style={styles.container3}>
            <View style={[styles.box, styles.box3]}><Button title="BUTTON3"></Button></View>
        </View>
        <View style={styles.container4}>
            <View style={[styles.box, styles.box3]}><Button title="BUTTON4"></Button></View>
        </View>
        <View style={styles.container5}>
            <View style={[styles.box, styles.box2]}><Button title="BUTTON5"></Button></View>
        </View>
        <View style={styles.container6}>
            <View style={[styles.box, styles.box1]}><Button title="BUTTON6"></Button></View>
        </View>
        <View style={styles.container7}>
            <View style={[styles.box, styles.box1]}><Button title="BUTTON7"></Button></View>
        </View>
        <View style={styles.container8}>
            <View style={[styles.box, styles.box2]}><Button title="BUTTON8"></Button></View>
        </View>
        <View style={styles.container9}>
            <View style={[styles.box, styles.box3]}><Button title="BUTTON9"></Button></View>
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
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'space-between', //replace with flex-end or center
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  container2: {
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container3: {
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container4: {
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container5: {
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container6: {
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  container7: {
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  container8: {
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container9: {
    flex: 1/9,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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