import React from 'react';
import { StyleSheet, FlatList, View, ScrollView } from 'react-native';
import CategoryListItem from '../components/CategoryList';
import hungImage from '../assets/hung.jpg'
import Axios from 'axios'
export default class Categorys extends React.Component {
  static navigationOptions = {
    title: 'HOME'
  };
  constructor(props) {
    super(props);
    this.state = {
      categoryList2: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ]
    };
  }
  // componentDidMount() {
  //   Axios.get("http://localhost:3000/products").then(res => {
  //       console.log(res.data)
  //       this.setState({
  //         categoryList2: res.data
  //       })
  //     }).catch(error => {
  //       console.log( error);
  //     })
  // }
  render() {
    const { navigation } = this.props; //props cua navigation/ PHAI GHI DUNG TEN
    const { categoryList2 } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <FlatList
            numColumns={2}
            data={categoryList2}
            renderItem={
              ({ item }) => (
                <View style={styles.wraper}>
                  <CategoryListItem
                    key={item.id}
                    image={hungImage}
                    name={item.name}
                    onPress={() => navigation.navigate('Catagory', {
                      categoryName: item.name,
                      pictureTest: hungImage
                    })} />
                </View>
              )


            }
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
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
  scrollview: {
  },
  wraper: {
    paddingHorizontal:8, // chieu ngang
    paddingVertical: 1 // chieu doc
  }
});
