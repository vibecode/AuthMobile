import React from 'react';
import { View } from 'react-native';

export const Card = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: 6,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 16
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
    padding: 16,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 12,
  }
};
