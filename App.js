import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Auth from './src/Auth';
import load from './src/loadingScene';

export default function App() {
  return (
    <Router>
    <Scene key="root">
        <Scene key = "loading" component={load} initial={true} hideNavBar={true}></Scene>
        <Scene key="Auth" component={Auth} hideNavBar={true}></Scene>

    </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
