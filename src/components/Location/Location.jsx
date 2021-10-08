import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { NUNITO } from '../../constants/fonts'

const window = Dimensions.get('window')
const screen = Dimensions.get('screen')


export const Location = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.city}>Tokyo</Text>
        <View style={{flex: 1}}>
          <Text style={styles.country}>Shibuya</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    // paddingTop: 36,
    // paddingBottom: 36,
    paddingLeft: 32,
    paddingRight: 32,
    height: 130,
    // backgroundColor: 'rgba(255,255,255,.5)'
  },
  city: {
    fontSize: 28,
    fontFamily: NUNITO.regular,
    lineHeight: 32,
    marginBottom: 6,
    color: '#fff'
  },
  country: {
    fontFamily: NUNITO.regular,
    fontSize: 18,
    lineHeight: 22,
    color: '#fff'
  }
})