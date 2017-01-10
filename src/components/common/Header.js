import React from 'react';
import { Text, View } from 'react-native';

export const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'grey'
  }
};
