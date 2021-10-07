import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ForecastItem } from '../components/Forecast/ForecastItem';
import { Location } from '../components/Location/Location';
import { Today } from '../components/Weather/Today';


const {height, width} = Dimensions.get('window');
const cityImg = {uri: 'https://picsum.photos/375/812'}

export const Weather = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={cityImg} resizeMode="cover" style={styles.bg}>
        <View style={{height: height * .6, position: "relative"}}>
          <View style={{flex: 1, zIndex: 2, elevation: 2}}>
          <Location />
          <Today />
          <View style={[styles.forecast]}>
            {
              Array.from({length: 4}).map(index => (
                <ForecastItem key={index} />
              ))
            }
          </View>
          </View>
          <View style={styles.circle}></View>
        </View>
      </ImageBackground>
    </View>
  )
}

const CONTENT_HEIGHT = height * .6;
const CIRCLE_SIZE = CONTENT_HEIGHT * 1.8;

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
    backgroundColor: '#212E3E',
  },
  forecast: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 30
  }
})