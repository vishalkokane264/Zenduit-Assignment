import React, { useEffect, useState } from "react";
import "./../scss/date-picker.scss";
import { Calendar, Search } from "../Assets";
import DisplayIcon from "./displayIcon";
export interface IDatePicker {
  placeholder: string;
  defaultText: string;
  onSubmit: (data: string) => void;
}
const DatePicker = (props: IDatePicker) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setText(props?.defaultText);
  }, [props.defaultText]);

  return (
    <div className="date-picker-wrapper">
      <div className="icon">
        <DisplayIcon icon={Calendar} height="25px" width="25px" />
      </div>
      <input
        type="date"
        value={text}
        onChange={(event: any) => setText(event?.target?.value)}
      />
    </div>
  );
};

export default DatePicker;
