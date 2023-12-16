import React from "react";
import "./../scss/data-card.scss";
export interface IDataCard {
  title: string;
  from: string;
  to: string;
  date: string;
  status: {
    title: string;
    color: string;
  };
  id: string;
}
export const DataCard = (props: IDataCard) => {
  return (
    <div className="data-card-wrapper">
      <div className="title-box">
        <p className="title">{props.title}</p>
        <div
          className="activity-status"
          style={{
            color: props?.status?.color,
            border: `1px solid ${props?.status?.color}`,
            backgroundColor: props?.status?.color + "10",
          }}
        >
          <span className="dot">•</span>
          <div className="chip-text">{props.status.title}</div>
        </div>
      </div>
      <div className="row2">
        <span className="row2-style text-style">From </span>
        <span className="data-style text-style">{props.from}</span>
      </div>
      <div className="row2">
        <span className="row2-style text-style">To </span>
        <span className="data-style text-style">{props.to}</span>
      </div>
      <div className="row2">
        <span className="row2-style text-style">Due Date </span>
        <span className="date-style text-style">{props.date}</span>
      </div>
    </div>
  );
};

export default DataCard;
