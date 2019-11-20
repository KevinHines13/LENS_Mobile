import React, {Component} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import {Slider} from '@react-native-community/slider';


import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';


export default class LawEnforcementLandingPage extends Component {

  constructor() {
    super();
      this.state = {
      value: 20
    };
  }

  render() {
    return (

      <View>
        <Text> Noah Smells </Text>

        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />

        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}

LawEnforcementLandingPage.navigationOptions = {
  title: 'LawEnforcementLandingPage',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
