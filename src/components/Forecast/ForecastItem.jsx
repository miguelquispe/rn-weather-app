import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NUNITO } from '../../constants/fonts'
import { darkTheme, ThemeStyle } from '../../constants/theme'
import { ThemeContext } from '../../context/Theme'
import IconMoon from '../../icons/IconMoon'

export const ForecastItem = (props) => {
  const {theme} = useContext(ThemeContext);

  const {hour="19:00", temp="12"} = props;

  // Approach 2: merge and replace styles
  const Styles = {
    ...styles,
    text: {
      ...styles.text,
      color: ThemeStyle[theme].gray
    }
  }

  return (
    <View style={Styles.itemContainer}>
      <Text style={Styles.text}>{hour}</Text>
      <View style={{marginVertical: 10}}>
        <IconMoon />
      </View>
      <Text style={Styles.text}>{`${temp}°`}</Text>
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
    lineHeight: 24
  }
})