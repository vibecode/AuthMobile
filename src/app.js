import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import Firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
      apiKey: 'AIzaSyBmKu55SGQCgDaip20oxwNYilm4NCxjZbw',
      authDomain: 'authmobile-442b8.firebaseapp.com',
      databaseURL: 'https://authmobile-442b8.firebaseio.com',
      storageBucket: 'authmobile-442b8.appspot.com',
      messagingSenderId: '742330710970'
    });
  }

  render() {
    return (
        <View>
          <Header headerText="Authentication"/>
          <LoginForm />
        </View>
    )
  }
}

export default App;
