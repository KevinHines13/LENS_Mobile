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


export default class CrimeHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      words: ['|One|','|Two|','|Three|', '|Four|'],
    };
  }

  onPress = (text) => {
    // do stuff
    return
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.getStartedText}>
            Select a past crime to view:
        </Text>
        <Card style ={styles.card}>
          <Text style={{fontSize: 22,fontWeight: 'bold'}}> 
            {this.state.words.map(item => {
              return <Text onPress={() => this.onPress(item)}> {item} </Text>
            })}
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#81c6d6',
    padding: 8,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#81c6d6',
  }
});
