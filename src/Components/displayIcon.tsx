import React from "react";
import { TypeAny } from "../Utils/interface";

export interface IIconSvg {
  icon: TypeAny;
  height?: string;
  width?: string;
}
const DisplayIcon = (props: IIconSvg) => {
  return (
    <img
      src={props.icon}
      height={props?.height || "24px"}
      width={props?.width || "24px"}
      alt=""
    />
  );
};

export default DisplayIcon;
