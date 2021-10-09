import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconTree = ({width = 24, height = 24, strokeColor="#BAB169"}) => {
  return (
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.46 48.25"
      stroke={strokeColor}
      strokeWidth={4}
    >
      <Path
        d="M17.73 1.1l-8.67 13a1 1 0 00.83 1.56h.86a1 1 0 01.82 1.57L4.67 27a1 1 0 00.82 1.57h.77a1 1 0 01.85 1.51l-6 10A1 1 0 002 41.61h31.46a1 1 0 00.86-1.51l-6-10a1 1 0 01.86-1.51H30a1 1 0 00.79-1.59l-6.9-9.86a1 1 0 01.82-1.57h.89a1 1 0 00.84-1.54L18 1m.07 40.25v6"
      />
    </Svg>
  )
}

export default IconTree;
