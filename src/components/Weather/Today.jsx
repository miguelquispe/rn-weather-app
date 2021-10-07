import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Today = () => {
  return (
    <View style={[styles.wrapper, styles.container]}>
      <View style={[styles.container, styles.row]}>
        <View  style={[styles.container, {justifyContent: 'center', paddingLeft: 20}]}>
          <Text style={styles.tempText}>14 °</Text>
        </View>
        <View style={[styles.container, styles.state]}>
          <View style={[styles.container, styles.row, {flexShrink: 1, alignItems: 'flex-end'}]}>
            <Text style={styles.stateText}>Sunny</Text>
          </View>
          <View style={[styles.container, styles.row, {flexShrink: 1, alignItems: 'flex-start'}]}>
            <Text style={styles.stateText}>High pollen</Text>
          </View>  
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'rgba(255,120,220, 0.2)'
  },
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  tempText: {
    padding: 0,
    margin: 0,
    fontSize: 112,
    letterSpacing: -5,
    includeFontPadding: false,
    color: '#fff',
  },
  state: {
    color: '#fff',
    justifyContent: 'center',
    paddingLeft: 20
  },
  stateText: {
    fontSize: 18,
    lineHeight: 24,
    color: '#fff'
  }
})