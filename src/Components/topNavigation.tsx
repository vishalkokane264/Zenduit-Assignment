import React, { useEffect, useState } from "react";
import { TypeAny } from "../Utils/interface";
import "./../scss/topNavigation.scss";
import DisplayIcon from "./displayIcon";
export interface IMenu {
  id: string;
  name: string;
  icon: TypeAny;
}
export interface IMenuData {
  options: IMenu[];
  active: string;
}

export interface ITopNavigation {
  title: string;
  menu: IMenuData;
  actions: IMenu[];
  actionClicked: (action: IMenu) => any;
  menuClicked: (menu: IMenu) => any;
}
const TopNavigation = (props: ITopNavigation) => {
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [menuList, setMenuList] = useState<IMenu[]>([]);
  useEffect(() => {
    setActiveMenu(props?.menu?.active);
  }, [props.menu.active]);
  useEffect(() => {
    setMenuList(props?.menu?.options);
  }, [props.menu.options]);
  return (
    <div className="top-navigation">
      <div className="title-box">{props.title}</div>
      <div className="menu-box">
        {menuList
          ? menuList?.map((option: IMenu, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    activeMenu === option.name ? "menu-active" : "menu"
                  }
                  onClick={() => {
                    setActiveMenu(option.id);
                    props?.menuClicked(option);
                  }}
                >
                  <div className="menu-icon">
                    <DisplayIcon icon={option.icon} />
                  </div>
                  <p className="menu-title">{option.name}</p>
                </div>
              );
            })
          : null}
      </div>

      <div className="action-box">
        {props?.actions &&
          props?.actions?.map((option: IMenu, index: number) => {
            return (
              <div
                className="menu"
                key={index}
                onClick={(event: any) => props.actionClicked(option)}
              >
                <div className="menu-icon">
                  <DisplayIcon icon={option.icon} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TopNavigation;
