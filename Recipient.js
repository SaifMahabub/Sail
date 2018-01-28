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
import IsWaiting from './IsWaiting';


const socket = io('https://obscure-forest-49040.herokuapp.com/', { transports: ['websocket'] }); //Connection to the node server

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }

  state = {
    text: null
  }

  componentWillMount() {
    this.initalizeSocketListeners();
  }

  initalizeSocketListeners() {
    socket.on('receive', function(data){
        // alert('Message: ' + data.text);
        Linking.openURL('http://adrielfabella.com').catch(err => console.error('An error occurred', err));
    });
  }

  render() {
    return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#77A8AB'
          }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              fontWeight: '500',
              color: '#fff'
            }}
          >We will let you know when you get messages!</Text>
          <IsWaiting />
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
