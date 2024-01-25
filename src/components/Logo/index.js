import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default Logo = props => {
  return (
    <View style={styles.logoSpace}>
      <Text style={styles.logoTitle}>{props.title}</Text>
    </View>
  );
};
