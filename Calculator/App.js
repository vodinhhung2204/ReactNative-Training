import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView } from 'react-native';
import History from './components/History'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '',
      b: '',
      result: '',
      operator: '',
      history: [],
    };
    this.add = this.add.bind(this)
    this.sub = this.sub.bind(this)
    this.mul = this.mul.bind(this)
    this.div = this.div.bind(this)
    this.addStack = this.addStack.bind(this)
  }
  componentDidMount() {
    
  }
  add() {
    var tmp = this.state.history
    tmp.push(this.state.a + '+' + this.state.b + '=' + (parseInt(this.state.a) + parseInt(this.state.b)).toString())
    this.setState({
      history: tmp

    })
    this.setState({
      result: (parseInt(this.state.a) + parseInt(this.state.b)).toString(),
      operator: '+',

    })
  }
  sub() {
    var tmp = this.state.history
    tmp.push(this.state.a + '-' + this.state.b + '=' + (parseInt(this.state.a) - parseInt(this.state.b)).toString())
    this.setState({
      history: tmp

    })
    this.setState({
      result: (parseInt(this.state.a) - parseInt(this.state.b)).toString(),
      operator: '-'
    })
  }
  mul() {
    var tmp = this.state.history
    tmp.push(this.state.a + '*' + this.state.b + '=' + (parseInt(this.state.a) * parseInt(this.state.b)).toString())
    this.setState({
      history: tmp

    })
    this.setState({
      result: (parseInt(this.state.a) * parseInt(this.state.b)).toString(),
      operator: '*'

    })
  }
  div() {
    var tmp = this.state.history
    tmp.push(this.state.a + '/' + this.state.b + '=' + (parseInt(this.state.a) / parseInt(this.state.b)).toString())
    this.setState({
      history: tmp

    })
    this.setState({
      result: (parseInt(this.state.a) / parseInt(this.state.b)).toString(),
      operator: '/'
    })
  }
  addStack() {
    this.setState({
    })
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.containerA}>
          <Text style={styles.textA}>Nhap vao a: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ a: text })}
          ></TextInput>
        </View>
        <View style={styles.containerB}>
          <Text style={styles.textB}>Nhap vao b: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ b: text })}
          ></TextInput>
        </View>
        <View style={styles.containerButton} >
          <Button title="+" style={styles.button} onPress={this.add} />
          <Button title="-" style={styles.button} onPress={this.sub} />
          <Button title="*" style={styles.button} onPress={this.mul} />
          <Button title="/" style={styles.button} onPress={this.div} />

        </View>
        <View style={{ flexDirection: 'row', paddingTop: 50 }}>

          {
            this.state.operator != '' && (
              <Text style={{ fontSize: 25 }}>RESULT: {this.state.a}  {this.state.operator}  {this.state.b}  = {this.state.result}</Text>
            )
          }
        </View>
        {/* {this.state.history.map((data) => {
          return <View>
            <Text>{data}</Text>
          </View>
        })} */}
        <History data={this.state.history}></History>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerA: {
    flexDirection: 'row',
    paddingTop: 50
  },
  textA: {
    fontSize: 20
  },
  containerB: {
    flexDirection: 'row',
    paddingTop: 30
  },
  textB: {
    fontSize: 20
  },
  containerButton: {
    flexDirection: 'row',
    paddingTop: 30
  },
  input: {
    height: 20,
    width: 'auto',
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 20
  },
  button: {
    height: 20,
    width: 20,
  }
});
