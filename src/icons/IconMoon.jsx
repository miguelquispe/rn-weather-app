import React from 'react'
import Svg, { Path } from 'react-native-svg'

const IconMoon = ({width = 24, height = 24, strokeColor="#BAB169"}) => {
  return (
    <Svg width={width} height={height} 
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </Svg>
  )
}

export default IconMoon;