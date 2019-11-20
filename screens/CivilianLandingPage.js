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
    backgroundColor: 'powderblue',
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
    alignItems: 'center',
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: 'orange',
    width: '45%',
    height: 40,
    paddingHorizontal: 2,
    marginTop: 15,
  },
  green_Button: {
    backgroundColor: 'green',
    width: '65%',
    height: 120,
    paddingHorizontal: 2,
    marginTop: 15,
  },
  red_Button: {
    backgroundColor: 'red',
    width: '65%',
    height: 120,
    paddingHorizontal: 2,
    marginTop: 15,
  }
});
