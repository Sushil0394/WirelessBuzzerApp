import * as React from 'react';
import { View } from 'react-native';
import AppHeader from '../components/AppHeader';
import BuzzerButton from '../components/BuzzerButton';

export default class BuzzerScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader/>
        <BuzzerButton color={this.props.navigation.getParam('color')}/>
      </View>
    );
  }
}