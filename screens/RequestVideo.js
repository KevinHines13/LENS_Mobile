import React, {Component} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Card } from 'react-native-paper';
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

import { Video } from 'expo-av';

export default class RequestVideo extends Component {

  constructor(props){
    super(props);
    this.state = {
      videoURL: "",
      uid: "",
      timestamp: "",
    };
  }

  componentDidMount(){
    this.state.uid = this.props.navigation.getParam("uid");
    this.state.timestamp = this.props.navigation.getParam("timestamp");
    console.log(this.state.uid);
    console.log(this.state.timestamp);

    // get video
    fetch(("https://hgx3ruz19i.execute-api.us-east-2.amazonaws.com/default/get-from-s3?uid="+ this.state.uid), {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
       this.setState({
          videoURL: responseJson
       })
    })
    .catch((error) => {
       console.error(error);
    });
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Text> {this.state.uid} </Text>
        <Text> {String(new Date(this.state.timestamp*1000))} </Text>

        <Video source={{ uri: "https://lens-test-video-bucket.s3.us-east-2.amazonaws.com/"+String(this.state.uid)+".mp4" }}
        style={styles.video}
        shouldPlay={true}
        isLooping
        resizeMode="cover"/>

          <Text> Video </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#81c6d6',
    padding: 8,
  },
});
