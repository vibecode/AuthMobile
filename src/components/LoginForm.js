import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import Firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: ''});

    Firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
          Firebase.auth().createUserWithEmailAndPassword(email, password)
              .catch(() => {
                  this.setState({error: 'Authentication Failed'});
              });
        });
  }

  render() {
    return (
        <Card>
          <CardSection>
              <Input
                  placeholder="Email Address"
                  value={this.state.email}
                  onChangeText={(inputValue) => {
                    this.setState({email: inputValue})
                  }}
              />
          </CardSection>

          <CardSection>
            <Input
                secureTextEntry
                placeholder="Password"
                value={this.state.password}
                onChangeText={(inputValue) => {
                    this.setState({password: inputValue})
                  }}
            />
          </CardSection>
            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>
          <Button title='LOG IN' onPress={this.onButtonPress.bind(this)}>Log In</Button>
        </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 22,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
