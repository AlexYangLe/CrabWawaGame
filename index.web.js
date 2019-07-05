import { AppRegistry } from 'react-native';
import React from 'react';
import App from './app/root';

AppRegistry.registerComponent('wawajiRN', () => App);
AppRegistry.runApplication('wawajiRN', {
  initialProps: {
  },
  rootTag: document.getElementById('react-root')
});