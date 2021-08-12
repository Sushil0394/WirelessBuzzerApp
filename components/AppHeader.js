import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Quiz Buzzer App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'black',
    padding: 25,
  },
  text: {
    color: 'skyblue',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppHeader;
