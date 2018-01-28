/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import io from 'socket.io-client';
import './ReactotronConfig';
import './Router';
import { Actions } from 'react-native-router-flux';
import { create } from 'apisauce';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const socket = io('https://obscure-forest-49040.herokuapp.com/', { transports: ['websocket'] }); //Connection to the node server

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  state = {
    text: null
  }

  componentWillMount() {

  }

  // initalizeSocketListeners() {
  //   socket.on('receive', function(data){
  //       alert('Booma' + data.text);
  //       // Linking.openURL('http://adrielfabella.com').catch(err => console.error('An error occurred', err));
  //   });
  // }

  onPressButton() {
    // Step 1 Update Database
    const data = new FormData();
    data.append('text', this.state.text);
    const api = create({
      baseURL: 'http://ffbcm.org'
    });

    api
      .post('/trial.php', data)
      .then(repsonse => {
        Reactotron.log(response);
      })
      .catch((error) => {
          console.log(error);
      });
    const message = {
        text: this.state.text
    }
    // Step 2 Send Socket Connection
    socket.emit('send', message);
    // Step 1 post data to datbaase
    // Step 2 send socket connectoin
    // Step 3
  }

  render() {
    return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
          }}
        >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderColor: '#003946',
            borderWidth: 2,
            width: 200,
            marginBottom: 40,
            marginTop: 40,
          }}>
        <Text> X Medical details </Text>
        <Text> Medication type </Text>


        </View>


          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300, borderRadius: 5, marginBottom: 20}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TouchableHighlight onPress={this.onPressButton.bind(this)}>
            <View
              style={{
                backgroundColor: 'black',
                width: 120,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 10,
                borderRadius: 5
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 15
                }}
              >Send Message</Text>
            </View>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
