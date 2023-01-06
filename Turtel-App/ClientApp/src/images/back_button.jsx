import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";
import { useHeaderHeight } from '@react-navigation/elements';

/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
  width={Platform.OS === 'android' ? useHeaderHeight() : useHeaderHeight()/1.5}
  height={Platform.OS === 'android' ? useHeaderHeight() : useHeaderHeight()/1.5}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M33 19.585L24.9649 28L33 36.415L30.5263 39L20 28L30.5263 17L33 19.585Z"
      fill="#9787AB"
    />
    <Defs></Defs>
  </Svg>
);
export default SVGComponent;