import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component{
  static navigationOptions = {
    title: 'HomeScreen',
  };
render() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
                require('../assets/images/LENS.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>


          <Text style={styles.getStartedText}>
            Low-Light Environment Neural Surveillance
          </Text>
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("LawEnforcementLandingPage")}
          >
          <Text style={{fontSize: 16}}> Police </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("CivilianLandingPage")}
          >
          <Text style={{fontSize: 16}}>Civilian</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73b0bd',
  },
  contentContainer: {
    paddingTop: 30,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
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
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  button_container: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 40,
  marginTop: 40,
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
  }
});
