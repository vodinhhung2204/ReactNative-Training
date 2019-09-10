import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    //title: 'CATEGORY'
    return {
      title: navigation.getParam('categoryName')
    }
  };
  render() {
    return (
      <View >
        <Text
          style={styles.text}
          onPress={() => this.props.navigation.navigate('Catagorys')}
        >
          {this.props.navigation.getParam('categoryName')}
            </Text>
        <Image source={this.props.navigation.getParam('pictureTest')} style={styles.categoryImage} />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    padding: 25
  },
  categoryImage: {
    width: 180,
    height: 120
  }
});
