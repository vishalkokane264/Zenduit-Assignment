import React, { useState } from "react";
import { Button, TopNavigation } from "./Components";
import { HeaderData } from "./raw-data/header";
import { IMenu } from "./Components/topNavigation";
import "./scss/index.scss";
import SearchBox from "./Components/searchBox";
import { SearchBoxData } from "./raw-data/searchbox";
import DropDown from "./Components/dropDown";
import { SelectForm, SelectStatus } from "./raw-data/dropdown";
import DatePicker from "./Components/datePicker";
import { PaperDownload, SubmissionIcon } from "./Assets";
import ToggleButton from "./Components/toggleButton";
import { ToggleData } from "./raw-data/toggle";
import DataCard, { IDataCard } from "./Components/data-card";
import { DataCardData } from "./raw-data/data-card";
import MapComponent from "./Components/map-component";
import randomStringFunc from "./Utils/randomString";
import Const from "./Utils/constants";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState<IMenu>({
    id: randomStringFunc(),
    name: Const.submissions,
    icon: SubmissionIcon,
  });
  const [activeView, setActiveView] = useState<string>(Const.mapSmall);
  const [activeForm, setActiveForm] = useState<string>("");
  const [activeStatus, setActiveStatus] = useState<string>(Const.falseStr);
  const [activeCard, setActiveCard] = useState<IDataCard>();
  const buttonAction = () => {
    alert(Const.dataExport);
  };
  const topNavAction = (message: string) => {
    alert(message);
  };

  return (
    <div className="dashboard-container">
      <div className="top-nav-container">
        <TopNavigation
          title={HeaderData.title}
          menu={{
            options: HeaderData.menu.options,
            active:
              selectedMenu?.name ||
              HeaderData?.menu?.active ||
              Const.submissions,
          }}
          actions={HeaderData.actions}
          actionClicked={(data: IMenu) => {
            data.name === Const.logout && topNavAction(Const.logoutSuccess);
            data.name === Const.notifications &&
              topNavAction(Const.notificationClicked);
          }}
          menuClicked={(data: IMenu) => setSelectedMenu(data)}
        />
      </div>
      <div className="dashboard-body">
        <p className="selection-title">{selectedMenu?.name}</p>
        <div className="dashboard-filters">
          <div className="type1">
            <div className="search-box">
              <SearchBox
                placeholder={SearchBoxData.placeholder}
                defaultText={SearchBoxData.defaultText}
                onSubmit={(data: any) => SearchBoxData.onSubmit(data)}
              />
            </div>
            <div className="select-form">
              {" "}
              <DropDown
                options={SelectForm.options}
                selectedValue={SelectForm.selectedValue}
                label={SelectForm.label}
                onChange={(data: any) => setActiveForm(data)}
              />
            </div>
            <div className="select-status">
              {" "}
              <DropDown
                options={SelectStatus.options}
                selectedValue={SelectStatus.selectedValue}
                label={SelectStatus.label}
                onChange={(data: any) => setActiveStatus(data)}
              />
            </div>
            <div className="select-date">
              {" "}
              <DatePicker
                placeholder={""}
                defaultText={""}
                onSubmit={function (data: string): void {}}
              />
            </div>
          </div>
          <div className="type2">
            <div className="toggle-option">
              <ToggleButton
                options={ToggleData.options}
                value={ToggleData.value}
                onClick={(view: string) => setActiveView(view)}
              />
            </div>
            <div className="export-button">
              {" "}
              <Button
                icon={PaperDownload}
                title="Export"
                buttonClicked={() => {
                  buttonAction();
                }}
              />
            </div>
          </div>
        </div>
        {activeView === Const.mapSmall ? (
          <div className="map-view">
            <div className="full-height">
              <div className="card-wrapper">
                <div className="card-container">
                  {DataCardData && DataCardData.length
                    ? DataCardData.filter((card: IDataCard) => {
                        if (activeStatus !== "false")
                          return (
                            activeStatus &&
                            card.status.title.includes(activeStatus)
                          );
                        else return card;
                      }).map((card: IDataCard, index: number) => {
                        return (
                          <div
                            key={index}
                            className={`${
                              activeCard?.id === card.id
                                ? "each-card-active"
                                : "each-card"
                            }`}
                            onClick={() => setActiveCard(card)}
                          >
                            <DataCard {...card} key={index} />
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
            <div className="full-map">
              <div className="map-wrapper">
                <MapComponent />
              </div>
            </div>
          </div>
        ) : (
          <div className="table-view">{Const.displayList}</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
