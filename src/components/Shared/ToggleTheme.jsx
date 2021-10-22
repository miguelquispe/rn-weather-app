import React, { useContext } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { ThemeStyle } from '../../constants/theme';
import { ThemeContext } from '../../context/Theme';

export const ToggleTheme = (props) => {
  const {handleValueChange} = props;
  const {theme} = useContext(ThemeContext);

  const ThemeColors = {
    text: ThemeStyle[theme].text,
    bg: ThemeStyle[theme].background,
    gray: ThemeStyle[theme].gray
  }

  return (
    <View style={Styles.container}>
      <View style={[Styles.toggle, { backgroundColor: ThemeColors.bg }]}>
        <Text style={{color: ThemeColors.text}}>LIGHT</Text>
        <Switch
          thumbColor={theme === 'dark' ? ThemeStyle['light'].background : ThemeStyle['dark'].background}
          trackColor={{false: ThemeStyle['dark'].gray, true: ThemeStyle['light'].gray}}
          value={theme === 'dark'}
          onValueChange={handleValueChange} />
        <Text style={{color: ThemeColors.text}}>DARK</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end', 
    flexDirection: 'row', 
    paddingTop: 60, 
    paddingHorizontal: 20
  },
  toggle: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: 'yellow'
  }
})