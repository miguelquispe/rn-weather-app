import React from 'react';
import { View } from 'react-native';
import { ForecastItem } from '../components/Forecast/ForecastItem';
import { Location } from '../components/Location/Location';
import { Today } from '../components/Weather/Today';

export const Weather = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}>
        <Location />
        <Today />
        <View style={{flex: 1}}>
          <ForecastItem />
        </View>
      </View>
    </View>
  )
}
