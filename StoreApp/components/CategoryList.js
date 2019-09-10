import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'

export default function CategoryListItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
            <View style={styles.container}>
                <Text style={styles.contentCatagory}>{props.name}</Text>
                <Image source={props.image} style={styles.categoryImage} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    categoryImage: {
        width: 180,
        height: 120
    },
    contentCatagory: {
        textTransform: 'uppercase',
    }
})