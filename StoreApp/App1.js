import React from 'react';
import { StyleSheet, Text, View,ScrollView, FlatList} from 'react-native';
import CategoryListItem from './components/CategoryList';
import hungImage from './assets/hung.jpg'

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      categoryList: [
        {id: 1, name: 'Chịch'},
        {id: 2, name: 'Chịch 2'},
        {id: 3, name: 'Chịch 2'},
        {id: 4, name: 'Chịch 3'},
        {id: 5, name: 'Chịch 4'},

        
      ],
      categoryList2: [
        {id: 1, name: 'Chịch 21'},
        {id: 2, name: 'Chịch 22'},
        
      ]
    };
  }
  render() {
    return (
    <View style={styles.container}>
      <Text>CCCCCCCCCCC</Text>
      <ScrollView style={styles.scrollview}>
        {this.state.categoryList.map((category) => (
          <CategoryListItem key={category.id} image={hungImage} name={category.name}></CategoryListItem>
        ))}
        <FlatList 
          data={this.state.categoryList2} 
          renderItem={
            ({item}) => <CategoryListItem key={item.id} image={hungImage} name={item.name}/> 
          }
          keyExtractor ={item => item.id.toString()}
          />
      </ScrollView>
      
    </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  scrollview: {
  }
});
