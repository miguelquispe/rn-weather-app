import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Weather } from './src/screens/Weather';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <Weather />
    </View>
  );
}
