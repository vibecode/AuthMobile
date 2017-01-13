import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import Firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    Firebase.initializeApp({
      apiKey: 'AIzaSyBmKu55SGQCgDaip20oxwNYilm4NCxjZbw',
      authDomain: 'authmobile-442b8.firebaseapp.com',
      databaseURL: 'https://authmobile-442b8.firebaseio.com',
      storageBucket: 'authmobile-442b8.appspot.com',
      messagingSenderId: '742330710970'
    });

    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <View style={spinnerContainerStyle}><Spinner /></View>
    }
  }

  render() {
    return (
        <View style={mainContainerStyle}>
          <Header headerText="Authentication"/>
          <View style={contentContainerStyle}>
            {this.renderContent()}
          </View>
        </View>
    )
  }
}

const styles = {
  mainContainerStyle: {
    flex: 1
  },
  contentContainerStyle: {
    padding: 16,
    flex: 1
  },
  spinnerContainerStyle: {
    padding: 16,
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
};

const {mainContainerStyle, contentContainerStyle, spinnerContainerStyle} = styles;

export default App;
