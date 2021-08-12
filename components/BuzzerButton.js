import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class BuzzerButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }
  render() {
    return (
      <TouchableOpacity 
        style={[styles.button, {backgroundColor:this.props.color}]}
        onPress={this.playSound}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    color: 'black',
    borderColor: 'black',
    borderWidth: 5,
    padding: 80,
    borderRadius: 250,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'Bold',
  },
});

export default BuzzerButton;
