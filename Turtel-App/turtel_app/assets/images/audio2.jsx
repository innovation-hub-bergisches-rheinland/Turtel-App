import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={49}
    height={60}
    viewBox="0 0 49 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14 45.8824H35V24.7059H49L24.5 0L0 24.7059H14V45.8824ZM24.5 9.98824L32.095 17.6471H28V38.8235H21V17.6471H16.905L24.5 9.98824ZM0 52.9412H49V60H0V52.9412Z"
      fill="#7A8BCE"
    />
  </Svg>
);
export default SVGComponent;