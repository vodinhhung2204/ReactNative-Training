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
                    <View style={[styles.box]}><Button title="1"></Button></View>
                </View>
                <View style={styles.container2}>
                    <View style={[styles.box]}><Button title="2"></Button></View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.container31}>
                        <View style={[styles.box]}><Button title="3"></Button></View>
                    </View>
                    <View style={styles.container32}>
                        <View style={[styles.box]}><Button title="4"></Button></View>
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
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between', //replace with flex-end or center
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'flex-end', //replace with flex-end or center
        alignItems: 'center',
    },
    container3: {
        flex: 2 / 3,
        flexDirection: 'column',
        justifyContent: 'center', //replace with flex-end or center,
        alignItems: 'center',
    },
    container31: {
        flexDirection: 'column',
        justifyContent: 'center', //replace with flex-end or center,
        alignItems: 'center',
    },
    container32: {
        paddingTop:15,
        flexDirection: 'column',
        justifyContent: 'center', //replace with flex-end or center,
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 30
    }
});