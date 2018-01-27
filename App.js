/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import io from 'socket.io-client';
import './ReactotronConfig';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }

  state = {
    text: ''
  }

  componentWillMount() {
    this.initializeSocketConnection();
    this.initalizeSocketListeners();
  }

  /**
   * This method initializes the socket connection, creating a channel for
   * the student to communicate with the tutor
   */
  initializeSocketConnection() {
    this.socket = io('https://obscure-forest-49040.herokuapp.com/', { transports: ['websocket'] }); //Connection to the node server
    // Authenticates the user
    this.socket.on('connect', () => {
      alert('boom bitch!');
    });
  }

  initalizeSocketListeners() {
    this.socket.on('receive', function(data){
        alert('Boom' + data.text);
    });
  }

  onPressButton() {
    this.socket.emit('send');
  }

  render() {
    return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
        >
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableHighlight onPress={this.onPressButton}>
            <Text
              style={{
                background: '#000',
                color: '#fff'
              }}
            >Send Message</Text>
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
