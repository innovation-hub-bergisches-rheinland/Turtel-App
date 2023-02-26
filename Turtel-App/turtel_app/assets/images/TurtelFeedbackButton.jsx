﻿import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TurtelFeedbackButton = (props) => (
    <Svg
        width={34}
        height={31}
        viewBox="0 0 34 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12.3636 31H26.2727C27.5555 31 28.6527 30.225 29.1164 29.109L33.7836 18.1815C33.9227 17.825 34 17.453 34 17.05V13.95C34 12.245 32.6091 10.85 30.9091 10.85H21.1573L22.6255 3.7665L22.6718 3.2705C22.6718 2.635 22.4091 2.046 21.9918 1.6275L20.3536 0L10.1691 10.2145C9.61273 10.7725 9.27273 11.5475 9.27273 12.4V27.9C9.27273 29.605 10.6636 31 12.3636 31ZM12.3636 12.4L19.0709 5.673L17 13.95H30.9091V17.05L26.2727 27.9H12.3636V12.4ZM0 12.4H6.18182V31H0V12.4Z"
            fill="#9676BE"
        />
    </Svg>
);
export default TurtelFeedbackButton;
