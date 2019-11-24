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
} from 'react-native';



export default class CivilianLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {isCrime: 1,}

  }
  render() {
    return (

    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.button_container}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("AddPhoneNumber")}
          >
          <Text style={{fontSize: 16}}> Add Phone # </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity
          style={(this.state.isCrime == 0) ? styles.green_Button : styles.red_Button}
          >
          <Text style={{fontSize: 22,fontWeight: 'bold'}}>{(this.state.isCrime == 0) ? "Clear" : "Location"}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  );
  }
}

CivilianLandingPage.navigationOptions = {
  title: 'CivilianLandingPage',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81c6d6',
  },
  contentContainer: {
    paddingTop: 150,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  button_container: {
    alignItems: 'center',
    marginHorizontal: 50,
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
