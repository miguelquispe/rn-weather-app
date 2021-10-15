import React, { useContext } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Switch, Text, View } from 'react-native';
import { ForecastItem } from '../components/Forecast/ForecastItem';
import { Location } from '../components/Location/Location';
import { Today } from '../components/Weather/Today';
import { FORECAST } from '../constants/dummy';
import { ThemeStyle } from '../constants/theme';
import { ThemeContext } from '../context/Theme';

const {height, width} = Dimensions.get('window');
const cityImg = {uri: 'https://picsum.photos/375/812'}

export const Weather = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const handleSwitchChange = (value) => {
    toggleTheme(value ? 'dark' : 'light')
  }

  const Styles = createStyles(theme);
 
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={cityImg} resizeMode="cover" style={Styles.bg}>
        <View style={{flex: 1, justifyContent: 'flex-end', alignContent:'flex-start', alignItems: 'flex-start',flexDirection: 'row', paddingVertical: 30, paddingHorizontal: 30}}>
          <Text>LIGHT</Text>
          <Switch value={theme === 'dark'} onValueChange={handleSwitchChange} />
          <Text>DARK</Text>
        </View>
        <View style={{height: height * .6, position: "relative"}}>
          <View style={{flex: 1, zIndex: 2, elevation: 2}}>
          <Location />
          <Today />
          <View style={[Styles.forecast]}>
            {
              FORECAST.map((item, index) => (
                <ForecastItem hour={item.hour} temp={item.temp} key={index} />
              ))
            }
          </View>
          </View>
          <View style={Styles.circle}></View>
        </View>
      </ImageBackground>
    </View>
  )
}

// Styles

const CONTENT_HEIGHT = height * .6;
const CIRCLE_SIZE = CONTENT_HEIGHT * 1.8;

// Approach 1
const createStyles = (theme) => {
  const styles = StyleSheet.create({
    bg: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    circle: {
      position: "absolute",
      top: 0,
      right: -CIRCLE_SIZE * .10,
      width: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
      height: CIRCLE_SIZE,
      backgroundColor: ThemeStyle[theme].background,
    },
    forecast: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 30
    },
  });

  return styles;
};
