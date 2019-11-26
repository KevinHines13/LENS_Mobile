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
      data : {
        Items: [],
        Count: '',
      }
    };
    fetch('https://t1rh47nqrh.execute-api.us-east-2.amazonaws.com/default/capstoneGetBatch', {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
       this.setState({
          data: responseJson
       })
       console.log(this.state.data.Items)
    })
    .catch((error) => {
       console.error(error);
    });

  }

  // componentDidMount = () => {
  //    fetch('https://t1rh47nqrh.execute-api.us-east-2.amazonaws.com/default/capstoneGetBatch', {
  //       method: 'GET'
  //    })
  //    .then((response) => response.json())
  //    .then((responseJson) => {
  //       console.log(responseJson);
  //       this.setState({
  //          data: responseJson
  //       })
  //       console.log(this.state.data.Items)
  //    })
  //    .catch((error) => {
  //       console.error(error);
  //    });
  // }

  renderCrimes(){
      //console.log(this.state.data.Items);
      {this.state.data && this.state.data.Items.map((instance, i) => {
        return(

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LawEnforcementLandingPage")}
          >
             <Text> {instance.uid} </Text>
             <Text> {instance.timestamp} </Text>
          </TouchableOpacity>
        );
      })
    }
  }

  render() {
    return (
    <ScrollView style={{backgroundColor: '#81c6d6'}}>
      <View style={styles.container}>
        <Text style={{fontSize: 24}}> Please select a crime below: </Text>
      <View>
        {this.state.data && this.state.data.Items.map((instance, i) => {
          return(
           
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate("LawEnforcementLandingPage")}
            >
               <Text style={{fontSize: 16}}> {String(new Date(instance.timestamp*1000))} </Text>
            </TouchableOpacity>
      
            
          );
        })
      }
        </View>
      </View>
</ScrollView>
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
  },
  button: {
    backgroundColor: '#f0b630',
    justifyContent:'space-between',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    padding: 11,
    paddingLeft: 5,
  }
});
