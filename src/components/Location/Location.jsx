import React, { useContext } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LOCATION } from '../../constants/dummy'
import { NUNITO } from '../../constants/fonts'
import { darkTheme, ThemeStyle } from '../../constants/theme'
import { ThemeContext } from '../../context/Theme'
import IconPin from '../../icons/IconPin'

export const Location = () => {
  const {theme} = useContext(ThemeContext);

  // Approach 3: Create only colors style
  const TextColors = {
    city: ThemeStyle[theme].text,
    country: ThemeStyle[theme].gray
  }

  return (
    <View style={Styles.container}>
      <Text style={[Styles.city, {color: TextColors.city}]}>{LOCATION.city}</Text>
      <View style={{flexDirection: 'row', alignItems:'center'}}>
        <IconPin/>
        <Text style={[Styles.country, {color: TextColors.country}]}>{LOCATION.district}</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
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
  },
  country: {
    fontFamily: NUNITO.regular,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 4,
  }
})