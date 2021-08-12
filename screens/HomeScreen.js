import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzerColor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzerColor });
  };

  render() {
    return (
      <View>
      
        <AppHeader/>

        <TouchableOpacity 
          style={[styles.button, {backgroundColor: 'red',}]} 
          onPress={() => {
            this.goToBuzzerScreen('red')
          }}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, {backgroundColor: 'lightblue',}]} 
          onPress={() => {
            this.goToBuzzerScreen('lightblue')
          }}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, {backgroundColor: 'lightgreen',}]} 
          onPress={() => {
            this.goToBuzzerScreen('lightgreen')
          }}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, {backgroundColor: 'yellow',}]} 
          onPress={() => {
            this.goToBuzzerScreen('yellow')
          }}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    color: 'black',
    borderColor: 'black',
    borderWidth: 5,
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'Bold',
  },
});
