//import liraries
import React from "react";
import "./Status.scss";

// create a component named Status
const Status = ({ status }) => {
  return (
    <div className="status">
      <svg
        width="26"
        height="28"
        viewBox="0 0 26 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 1H1V26.5H25V1Z"
          stroke="black"
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 20H15.5"
          stroke="black"
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 14.5H18.5"
          stroke="black"
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 8H20"
          stroke="black"
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{status}</span>
    </div>
  );
};

//make this component available to the app
export default Status;
