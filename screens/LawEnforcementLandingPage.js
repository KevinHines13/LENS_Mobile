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


export default class LawEnforcementLandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }

  changeSlider(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    const {value} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.button_container}>
          <View style={styles.button}>
            <Button
              title="Add Phone #"
               onPress={() => this.props.navigation.navigate("AddPhoneNumber")}
               />
          </View>
        </View>

        <View style={styles.button_container}>
          <View style={(this.state.isCrime == 0) ? styles.green_Button : styles.red_Button}>
            <Button
              title={(this.state.isCrime == 0) ? "Clear" : "Location"}
               />
          </View>
        </View>

        <View style={styles.button_container}>
          <View style={styles.button}>
            <Button
              title="Crime History"
               onPress={() => this.props.navigation.navigate("CrimeHistory")}
               />
          </View>
        </View>


        <View style={styles.bottomView}>
          <Slider
          style={styles.sliderWindow}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="green"
            maximumTrackTintColor="red"
            onValueChange={this.changeSlider.bind(this)}
            value={value}
            step={0.1}

          />

          <Text>Confidence: {this.state.value}</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 40, //Here is the trick
  },
  sliderWindow: {
    width: '80%',
    backgroundColor: 'powderblue',
  },
  button: {
    backgroundColor: 'orange',
    width: '45%',
    height: 40,
    paddingHorizontal: 2,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  green_Button: {
    backgroundColor: 'green',
    width: '65%',
    height: 120,
    paddingHorizontal: 2,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  red_Button: {
    backgroundColor: 'red',
    width: '65%',
    height: 120,
    paddingHorizontal: 2,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
  }
});
