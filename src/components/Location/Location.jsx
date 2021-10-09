import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LOCATION } from '../../constants/dummy'
import { NUNITO } from '../../constants/fonts'
import { darkTheme } from '../../constants/theme'
import IconPin from '../../icons/IconPin'

export const Location = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{LOCATION.city}</Text>
      <View style={{flexDirection: 'row', alignItems:'center'}}>
        <IconPin/>
        <Text style={styles.country}>{LOCATION.district}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 32,
    paddingRight: 32,
    height: 130,
  },
  city: {
    fontSize: 28,
    fontFamily: NUNITO.regular,
    lineHeight: 32,
    marginBottom: 6,
    color: darkTheme.text
  },
  country: {
    fontFamily: NUNITO.regular,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 4,
    color: darkTheme.gray
  }
})