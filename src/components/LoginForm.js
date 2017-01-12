import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import Firebase from 'firebase';
class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  onButtonPress() {
    const {email, password} = this.state;

    Firebase.auth().signInWithEmailAndPassword();
  }

  render() {
    return (
        <Card>
          <CardSection>
              <Input
                  placeholder="Email"
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

          <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                LOG IN
              </Button>
          </CardSection>
        </Card>
    )
  }
}

export default LoginForm;
