//import liraries
import React from "react";
import "./StatusIcon.scss";

const disabled = { backgroundColor: "#00000010", color: "#00000040" };
const important = { backgroundColor: "#00000040" };
const urgent = { backgroundColor: "#FF700A" };
const malfunction = { backgroundColor: "#ff0000" };

// create a component named StatusIcon
const StatusIcon = ({ level }) => {
  return (
    <div
      className="alert"
      style={
        level === "disabled"
          ? disabled
          : level === "important"
          ? important
          : level === "urgent"
          ? urgent
          : malfunction
      }
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 19V14C21 10.93 19.36 8.36 16.5 7.68V7C16.5 6.17 15.83 5.5 15 5.5C14.17 5.5 13.5 6.17 13.5 7V7.68C10.63 8.36 9 10.92 9 14V19L7 21V22H23V21L21 19ZM16 19H14V17H16V19ZM16 15H14V11H16V15ZM15 25C16.1 25 17 24.1 17 23H13C13 24.1 13.89 25 15 25Z"
          fill={level === "disabled" ? "#00000020" : "white"}
        />
      </svg>
    </div>
  );
};

//make this component available to the app
export default StatusIcon;
