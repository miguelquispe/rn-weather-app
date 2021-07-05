import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const window = Dimensions.get('window')
const screen = Dimensions.get('screen')


export const Location = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>Tokyo</Text>
      <View style={{flex: 1}}>
        <Text style={styles.country}>Shibuya {window.width * 1}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FA8DA',
    borderTopRightRadius: 200,
    paddingTop: 36,
    paddingLeft: 32,
    height: 130
  },
  city: {
    fontSize: 28,
    lineHeight: 32,
    backgroundColor: 'blue'
  },
  country: {
    fontSize: 18,
    lineHeight: 22,
    backgroundColor: 'orange'
  }
})