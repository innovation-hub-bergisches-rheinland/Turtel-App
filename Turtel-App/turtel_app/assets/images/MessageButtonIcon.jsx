import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MessageButtonIcon = (props) => (
    <Svg
        width={35}
        height={35}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M31.5 0H3.5C1.575 0 0.0175 1.575 0.0175 3.5L0 35L7 28H31.5C33.425 28 35 26.425 35 24.5V3.5C35 1.575 33.425 0 31.5 0ZM28 21H7V17.5H28V21ZM28 15.75H7V12.25H28V15.75ZM28 10.5H7V7H28V10.5Z"
            fill="#7A8BCE"
        />
    </Svg>
);
export default MessageButtonIcon;
