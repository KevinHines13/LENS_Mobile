import React, {Component} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Slider,
} from 'react-native';


export default class CrimeHistory extends Component {
  render() {
    return (
      <View>
        <Text> Crime History </Text>
      </View>
    );
  }
}

CrimeHistory.navigationOptions = {
    title: 'CrimeHistory',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue'
  },

  });
