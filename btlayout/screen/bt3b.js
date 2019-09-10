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
                <View style={styles.containerFull}>
                    <View style={styles.container}>
                        <View style={[styles.box, styles.container11]}><Button title="1"></Button></View>
                        <View style={[styles.box, styles.container12]}><Button title="2"></Button></View>
                    </View>
                    <View style={styles.container2}>
                        <View style={[styles.box, styles.container21]}><Button title="3"></Button></View>
                        <View style={[styles.box, styles.container22]}><Button title="4"></Button></View>
                        <View style={[styles.box, styles.container23]}><Button title="5"></Button></View>
                    </View>
                    <View style={styles.container3}>
                        <View style={[styles.box, styles.container31]}><Button title="6"></Button></View>
                        <View style={[styles.box, styles.container32]}><Button title="7"></Button></View>
                        <View style={[styles.box, styles.container33]}><Button title="8"></Button></View>
                        <View style={[styles.box, styles.container34]}><Button title="9"></Button></View>
                    </View>
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
        paddingTop: 250,
        flexDirection: 'row',
        justifyContent: 'space-between', //replace with flex-end or center
    },
    container11: {
        flex: 0.98 / 2
    },
    container12: {
        flex: 0.98 / 2
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'flex-start', //replace with flex-end or center
        justifyContent: 'space-between', //replace with flex-end or center
        paddingTop: 12
    },
    container21: {
        flex: 0.98 / 3
    },
    container22: {
        flex: 0.98 / 3
    },
    container23: {
        flex: 0.98 / 3
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'flex-start', //replace with flex-end or center
        justifyContent: 'space-between', //replace with flex-end or center
        paddingTop: 12
    },
    container31: {
        flex: 0.98 / 4
    },
    container32: {
        flex: 0.98 / 4
    },
    container33: {
        flex: 0.98 / 4
    },
    container34: {
        flex: 0.98 / 4
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