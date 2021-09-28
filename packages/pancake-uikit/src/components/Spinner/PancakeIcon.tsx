import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 250 250" {...props}>
      <image width="250" height="250" href="/images/money_bag.svg" />
    </Svg>
  );
};

export default Icon;
