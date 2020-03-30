import React from "react";
import {AppRegistry} from "react-native";
import App from 'core/src/App';

AppRegistry.registerComponent('sample-app', () => App);
AppRegistry.runApplication('sample-app', {
  rootTag: document.getElementById("root"),
});
