import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Today = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.row]}>
        <View style={styles.container}>
          <Text style={styles.tempText}>14 °</Text>
        </View>
        <View style={[styles.container, styles.state]}>
          <View style={[styles.container, styles.row]}>
            <Text style={styles.stateText}>Sunny</Text>
          </View>
          <View style={[styles.container, styles.row]}>
            <Text style={styles.stateText}>High pollen</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row'
  },
  tempText: {
    fontSize: 100,
    lineHeight: 100
  },
  state: {
    marginTop: 40,
    justifyContent: 'flex-end'
  },
  stateText: {
    fontSize: 18,
    lineHeight: 18
  }
})