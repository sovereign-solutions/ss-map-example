/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
console.log('start', appName);
AppRegistry.registerComponent(appName, () => App);
