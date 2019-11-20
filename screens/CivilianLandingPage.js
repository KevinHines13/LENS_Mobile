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
  render() {
    return (

      <View>
        <Text> Noah Smells Good</Text>
        <Button
          title="Police"
           onPress={() => this.props.navigation.navigate("LawEnforcementLandingPage")}
           />

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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
