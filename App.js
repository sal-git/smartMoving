/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import MapView from "react-native-maps";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component<{}> {


  _loadTrucks(){
    Alert.alert('You tapped a button')
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={[styles.boxContainer, styles.boxOne]}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={[styles.boxContainer, styles.boxThree]}>
          <Card
            title='HELLO WORLD'>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>

            <Button
              onPress={this._loadTrucks}
              icon={{name: 'code'}}
              backgroundColor='#03A9F4'
              fontFamily='Lato'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW CURRENT TRUCKS' />
          </Card>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  container: {
    flex: 1, // 1:1
    flexDirection: 'column',
  },
  boxContainer: {
    flex: 1, // 1:3
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne: {
    flex: 3, // 3:6
    backgroundColor: '#FFEEE4',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  boxTwo: {
    flex: 1, // 1:6
    backgroundColor: '#F17F42'
  },
  boxThree: {
    flex: 1, // 2:6
    flexDirection: 'row',
    justifyContent: 'space-between', // main axis
    alignItems: 'flex-end', // cross axis
    backgroundColor: '#CE6D39',
  },
  // mainContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // // mainCard: {
  // //   flex: 1,
  // //   backgroundColor: "white"
  // // },
  // container: {
  //   flex: 1,
  //   flexDirection: 'column'
  //   // justifyContent: "center",
  //   // alignItems: "center",
  //   // backgroundColor: "#F5FCFF"
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: "center",
  //   margin: 10
  // },
  // instructions: {
  //   textAlign: "center",
  //   color: "#333333",
  //   marginBottom: 5
  // },
  // map: {
  //   flex: 2,
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   position: "absolute"
  // }
});
