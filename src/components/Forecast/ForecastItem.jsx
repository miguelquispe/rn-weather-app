import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NUNITO } from '../../constants/fonts'
import { darkTheme } from '../../constants/theme'
import IconMoon from '../../icons/IconMoon'

export const ForecastItem = (props) => {
  const {hour="19:00", temp="12"} = props;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{hour}</Text>
      <View style={{marginVertical: 10}}>
        <IconMoon />
      </View>
      <Text style={styles.text}>{`${temp}°`}</Text>
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