import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={60}
    height={64}
    viewBox="0 0 60 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_1_786)">
      <Rect x={2} width={52} height={56} rx={15} fill="white" />
    </G>
    <Path
      d="M33 19.585L24.9649 28L33 36.415L30.5263 39L20 28L30.5263 17L33 19.585Z"
      fill="#9787AB"
    />
    <Defs></Defs>
  </Svg>
);
export default SVGComponent;