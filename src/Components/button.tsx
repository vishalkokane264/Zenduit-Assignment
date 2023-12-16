import React from "react";
import DisplayIcon from "./displayIcon";

export interface IButton {
  title: string;
  icon: any;
  buttonClicked: (data: any) => any;
}
export const Button = (props: IButton) => {
  return (
    <div className="button-wrapper">
      <button
        className="button-row"
        onClick={() => props?.buttonClicked(props?.title)}
      >
        {props?.icon && (
          <div className="icon">
            <DisplayIcon icon={props?.icon} />
          </div>
        )}
        <div className="button-text">{props?.title}</div>
      </button>
    </div>
  );
};

export default Button;
