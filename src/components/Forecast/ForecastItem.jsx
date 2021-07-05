import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ForecastItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>19:00</Text>
      <Text style={styles.text}>12°</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
  }
})