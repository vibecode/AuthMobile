import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Firebase from 'firebase';
import firebaseInit from './firebaseInit';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    //firebaseInit param is an object that contains your Firebase credentials, you should pass your own here.
    Firebase.initializeApp(firebaseInit);

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
        return <Button onPress={this.onSignOut.bind(this)}>Log Out</Button>;

      case false:
        return <LoginForm />;

      default:
        return (
            <View style={spinnerContainerStyle}>
              <Spinner />
            </View>)
    }
  }

  onSignOut() {
    Firebase.auth().signOut();
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
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const {mainContainerStyle, contentContainerStyle, spinnerContainerStyle} = styles;

export default App;
