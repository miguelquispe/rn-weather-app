import React from 'react';
import { SafeAreaView } from 'react-native';
import { useFonts, Nunito_300Light, Nunito_400Regular } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import { Weather } from './src/screens/Weather';
import { ThemeProvider } from './src/context/Theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_300Light
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider>
        <SafeAreaView style={{flex: 1}}>
          <Weather />
        </SafeAreaView>
      </ThemeProvider>
    );
  }

}
