import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          Firebase.auth().createUserWithEmailAndPassword(email, password)
              .catch(this.onLoginFail.bind(this));
        });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
        <Button title='login' onPress={this.onButtonPress.bind(this)}>Log In</Button>
    )
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

          {this.renderButton()}
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
