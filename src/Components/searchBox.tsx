import React, { useEffect, useState } from "react";
import "./../scss/searchBox.scss";
import { Search } from "../Assets";
import DisplayIcon from "./displayIcon";
export interface ISearchBox {
  placeholder: string;
  defaultText: string;
  onSubmit: (data: string) => void;
}
const SearchBox = (props: ISearchBox) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setText(props?.defaultText);
  }, [props.defaultText]);
  return (
    <div className="search-box-wrapper">
      <div className="icon">
        <DisplayIcon icon={Search} height="25px" width="25px" />
      </div>
      <input
        type="text"
        value={text}
        placeholder="Search"
        onChange={(event: any) => setText(event?.target?.value)}
      />
    </div>
  );
};

export default SearchBox;
