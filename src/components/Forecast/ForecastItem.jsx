import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NUNITO } from '../../constants/fonts'
import { darkTheme } from '../../constants/theme'

export const ForecastItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>19:00</Text>
      {/* Icon */}
      <Text style={styles.text}>12°</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: NUNITO.regular,
    lineHeight: 24,
    color: darkTheme.gray
  }
})