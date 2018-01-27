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

const socket = io('https://obscure-forest-49040.herokuapp.com/', { transports: ['websocket'] }); //Connection to the node server

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }

  onRecipientClick() {
      Actions.receive();
  }

  onSenderClick() {
      Actions.send();
  }

  render() {
    return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableHighlight onPress={this.onRecipientClick.bind(this)}>
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
              >Recipient</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress = {this.onSenderClick.bind(this)}>
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
            >Sender</Text>
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
