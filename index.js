/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoidGhhbmdkdCIsImEiOiJja3FhbWFuYzEwOGNxMndxN2N5aXhueTcxIn0.fT1mYkCCZZ9EIka_JMFtww');
AppRegistry.registerComponent(appName, () => App);
