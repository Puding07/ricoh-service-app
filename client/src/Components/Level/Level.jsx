//import liraries
import React from "react";

const LevelOne = () => {
  return (
    <svg
      width="47"
      height="38"
      viewBox="0 0 47 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="43"
        y1="4"
        x2="43"
        y2="34"
        stroke="black"
        strokeOpacity="0.25"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="13"
        x2="22"
        y2="34"
        stroke="black"
        strokeOpacity="0.25"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="26"
        x2="4"
        y2="34"
        stroke="#38FFB7"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

const LevelTwo = () => {
  return (
    <svg
      width="47"
      height="38"
      viewBox="0 0 47 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="43"
        y1="4"
        x2="43"
        y2="34"
        stroke="black"
        strokeOpacity="0.25"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="13"
        x2="22"
        y2="34"
        stroke="#FF700A"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="26"
        x2="4"
        y2="34"
        stroke="#FF700A"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

const LevelThree = () => {
  return (
    <svg
      width="47"
      height="38"
      viewBox="0 0 47 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="43"
        y1="4"
        x2="43"
        y2="34"
        stroke="#FF0000"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="13"
        x2="22"
        y2="34"
        stroke="#FF0000"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line
        x1="4"
        y1="26"
        x2="4"
        y2="34"
        stroke="#FF0000"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

// create a component named Level
const Level = ({ level }) => {
  return (
    <div className="level">
      {level === 1 ? <LevelOne /> : level === 2 ? <LevelTwo /> : <LevelThree />}
    </div>
  );
};

//make this component available to the app
export default Level;
