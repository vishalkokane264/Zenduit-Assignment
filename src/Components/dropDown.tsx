import React, { useEffect, useState } from "react";
import "./../scss/dropDown.scss";
interface IDropDownOption {
  label: string;
  value: string;
}
export interface IDropDown {
  options: IDropDownOption[];
  selectedValue?: string;
  label?: string;
  onChange: (data: string) => void;
}
const DropDown = (props: IDropDown) => {
  const [options, setOptions] = useState<IDropDownOption[]>([]);
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    if (props?.options) {
      setOptions(props?.options);
    } else if (props?.selectedValue) {
      setValue(props?.selectedValue);
    }
  }, [props?.options, props?.selectedValue]);
  return (
    <div className="dropdown-wrapper">
      <select
        key={props.label}
        className="select"
        value={value}
        onChange={(event: any) => {
          setValue(event?.target?.value);
          props?.onChange(event?.target?.value);
        }}
      >
        <option className="option" value="false">
          {props?.label || "--Select--"}
        </option>
        {options && options.length
          ? options?.map((option: IDropDownOption, index: number) => {
              return (
                <option key={index} className="option" value={option.value}>
                  {option.label}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default DropDown;
