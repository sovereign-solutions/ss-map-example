import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapScreen from './src/components/MapScreen';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
export default class App extends Component {  
  render() {
    return (
      <View style={styles.page}>
        <MapScreen/>
      </View>
    );
  }
}
