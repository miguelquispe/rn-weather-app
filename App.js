import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useFonts, Nunito_300Light, Nunito_400Regular } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { Weather } from './src/screens/Weather';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_300Light
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{flex: 1}}>
        <StatusBar style="light" />
        <Weather />
      </View>
    );
  }

}
