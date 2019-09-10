import React from 'react';
import { StyleSheet, FlatList, View, ScrollView, Text } from 'react-native';

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillReceiveProps() {
        this.setState({
            data: this.props.data
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    {/* {this.state.data.map((data) => {
                        return <View>
                            <Text>{data}</Text>
                        </View>
                    })} */}
                    <FlatList
                        data={this.state.data}
                        extraData={this.state.data}
                        renderItem={
                            ({ item }) => (
                                <View style={styles.wraper}>
                                    <Text>
                                        {item}
                                    </Text>
                                </View>
                            )


                        }
                        keyExtractor={item => item}
                    />
                </ScrollView>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    scrollview: {
    },
    wraper: {
        paddingHorizontal: 8, // chieu ngang
        paddingVertical: 1 // chieu doc
    }
});