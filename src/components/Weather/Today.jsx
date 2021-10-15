import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NUNITO } from '../../constants/fonts';
import { darkTheme, ThemeStyle } from '../../constants/theme';
import { ThemeContext } from '../../context/Theme';
import IconMoon from '../../icons/IconMoon';
import IconTree from '../../icons/Tree';

export const Today = () => {
  const {theme} = useContext(ThemeContext);

  // Approach 3: Create only colors style
  const TextColors = {
    temp: ThemeStyle[theme].text,
    state: ThemeStyle[theme].gray
  }

  return (
    <View style={[styles.wrapper, styles.container]}>
      <View style={[styles.container, styles.row]}>
        <View  style={[styles.container, {justifyContent: 'center', paddingLeft: 20}]}>
          <Text style={[styles.tempText, {color: TextColors.temp}]}>14°</Text>
        </View>
        <View style={[styles.container, styles.state, {justifyContent:'center'}]}>
          <View style={[styles.row, {alignItems: 'flex-end', marginBottom: 8}]}>
            <IconMoon />
            <Text style={[styles.stateText, {color: TextColors.state}]}>Clear</Text>
          </View>
          <View style={[styles.row, {alignItems: 'flex-start'}]}>
            <IconTree />
            <Text style={[styles.stateText, {color: TextColors.state}]}>High pollen</Text>
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
  }
})