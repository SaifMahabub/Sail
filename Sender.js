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
import IsWaiting from './IsWaiting';

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
    this.initalizeSocketListener();
  }

  state = {
    text: null,
    confirm: true
  }

  initalizeSocketListener() {
      socket.on('sendconfirm', function(data){
        alert('donezo');
      });
  }

  PressButton() {
    this.setState({confirm: false})
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
  }

  render() {
    if(!this.state.confirm) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#77A8AB'
          }}
        >
          <Text
            style={{
              marginBottom: 40,
              fontSize: 30,
              color: '#fff',
              textAlign: 'center'
            }}
          >Waiting Confirmation From your Grandpapa</Text>
          <IsWaiting />
        </View>
      );
    }
    return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#77A8AB'
          }}
        >
          <Text
            style={{
              marginBottom: 40,
              fontSize: 30,
              color: '#fff'
            }}
          > Message your Elder</Text>
          <TextInput
            style={{height: 40, borderColor: '#fff', borderWidth: 1, width: 300, borderRadius: 5, marginBottom: 20; color: '#fff'}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TouchableHighlight onPress={this.onPressButton.bind(this)}>
            <View
              style={{
                backgroundColor: '#eaab00',
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
