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
  TouchableOpacity,
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
            backgroundColor: '#77A8AB'
          }}
        >
          <Text style={{ fontSize: 50, paddingBottom: 20, color: '#fff'}}>
            Sail Hello
          </Text>
          <TouchableOpacity onPress={this.onRecipientClick.bind(this)}>
            <View
            style={{
              marginRight:40,
              marginLeft:40,
              marginTop:10,
              paddingTop:20,
              paddingBottom:20,
              paddingLeft:40,
              paddingRight:40,
              backgroundColor:'#eaab00',
              borderRadius:10,
              borderWidth: 2,
              borderColor: '#fff'
            }}
            >
              <Text
              style={{
                color: 'rgba(0,0,0,0.6)',
                textAlign: 'center',
                fontSize: 26
              }}
              >Recipient</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {this.onSenderClick.bind(this)}>
            <View
            style={{
              marginRight:40,
              marginLeft:40,
              marginTop:60,
              paddingTop:20,
              paddingBottom:20,
              paddingLeft:50,
              paddingRight:50,
              backgroundColor:'#eaab00',
              borderRadius:10,
              borderWidth: 2,
              borderColor: '#fff'
            }}
            >
            <Text
            style={{
              color: 'rgba(0,0,0,0.6)',
              textAlign: 'center',
              fontSize: 26
            }}
            >Sender</Text>
            </View>
          </TouchableOpacity>

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
