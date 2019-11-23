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
      isCrime: 1,
    };
  }

  changeSlider(value) {
    this.setState(() => {
      return {
        value: parseInt(value),
      };
    });
  }

  render() {
    const {value} = this.state;

    return (
      <View style={styles.container}>
        

        <View style={styles.button_container}>
          <TouchableOpacity
          style={(this.state.isCrime == 0) ? styles.green_Button : styles.red_Button}
          >
          <Text style={{fontSize: 22,fontWeight: 'bold'}}>{(this.state.isCrime == 0) ? "Clear" : "Location"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("CrimeHistory")}
          >
          <Text style={{fontSize: 16}}> Crime History </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sliderView}>
          <Slider
          style={styles.sliderWindow}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#39b533"
            maximumTrackTintColor="#f04646"
            onValueChange={this.changeSlider.bind(this)}
            value={value}
            step={0.1}

          />
          <TouchableOpacity
          style={styles.set_button}
          onPress={() => this.props.navigation.navigate("Blah")}
          >
          <Text style={{fontSize: 16}}> Set </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <Text>Confidence: {this.state.value}               </Text>
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
    backgroundColor: '#81c6d6',
  },
  sliderView: {
    width: '100%',
    height: 40,
    backgroundColor: '#81c6d6',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 50, //Here is the trick
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomView: {
    width: '100%',
    height: 13,
    backgroundColor: '#81c6d6',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 28, //Here is the trick
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sliderWindow: {
    width: '75%',
    backgroundColor: '#81c6d6',
  },
  button_container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#f0b630',
    width: '45%',
    height: 40,
    padding: 11,
    paddingHorizontal: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
    alignItems: 'center',
  },
  set_button: {
    backgroundColor: '#f0b630',
    width: '12%',
    height: 40,
    padding: 11,
    paddingHorizontal: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 5,
    marginLeft: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  red_Button: {
    backgroundColor: '#f04646',
    height: 200,
    paddingHorizontal: 90,
    paddingTop: 90,
    marginTop: 15,
    alignItems: 'center',
  },
  green_Button: {
    backgroundColor: '#39b533',
    height: 200,
    paddingHorizontal: 100,
    paddingTop: 90,
    marginTop: 15,
    alignItems: 'center',
  }
});
