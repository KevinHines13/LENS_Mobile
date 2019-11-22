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
        <Text> Noah Smells </Text>

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
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },

  sliderWindow: {
    width: '80%',
    backgroundColor: 'white',
  }
});
