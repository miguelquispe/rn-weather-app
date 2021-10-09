import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NUNITO } from '../../constants/fonts';
import { darkTheme } from '../../constants/theme';
import IconMoon from '../../icons/IconMoon';
import IconTree from '../../icons/Tree';

export const Today = () => {
  return (
    <View style={[styles.wrapper, styles.container]}>
      <View style={[styles.container, styles.row]}>
        <View  style={[styles.container, {justifyContent: 'center', paddingLeft: 20}]}>
          <Text style={styles.tempText}>14°</Text>
        </View>
        <View style={[styles.container, styles.state, {justifyContent:'center'}]}>
          <View style={[styles.row, {alignItems: 'flex-end', marginBottom: 8}]}>
            <IconMoon />
            <Text style={styles.stateText}>Clear</Text>
          </View>
          <View style={[styles.row, {alignItems: 'flex-start'}]}>
            <IconTree />
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
    fontFamily: NUNITO.light,
    letterSpacing: -10,
    includeFontPadding: false,
    color: darkTheme.text
  },
  state: {
    justifyContent: 'center',
    paddingLeft: 20
  },
  stateText: {
    fontFamily: NUNITO.regular,
    fontSize: 18,
    lineHeight: 24,
    marginLeft: 10,
    color: darkTheme.gray
  }
})