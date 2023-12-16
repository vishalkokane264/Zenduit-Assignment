import React, { useEffect, useState } from "react";
interface IButtonOption {
  label: string;
  value: string;
}

export interface IToggleButton {
  options: IButtonOption[];
  value: string;
  onClick: (data: any) => void;
}

const ToggleButton = (props: IToggleButton) => {
  const [buttonList, setButtonList] = useState<IButtonOption[]>([]);
  const [activeButton, setActiveButton] = useState<string>("map");

  useEffect(() => {
    setButtonList(props?.options);
  }, [props.options]);
  function toggleView(view: string) {
    setActiveButton(view);
    props?.onClick(view);
  }
  return (
    <div className="toggle-button-wrapper">
      <div className="toggle-container">
        {buttonList && buttonList.length
          ? buttonList?.map((button: IButtonOption, index: number) => {
              return (
                <div
                  key={index}
                  className={`toggle-button ${
                    activeButton === button.value
                      ? "active-button"
                      : "inactive-button"
                  }`}
                  onClick={() => toggleView(button.value)}
                >
                  {button.label}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ToggleButton;
