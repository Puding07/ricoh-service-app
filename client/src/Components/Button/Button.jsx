//import liraries
import React from "react";
import "./Button.scss";

const Plus = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 15.1429C30 16.2474 29.1046 17.1429 28 17.1429H19.1429C18.0383 17.1429 17.1429 18.0383 17.1429 19.1429V28C17.1429 29.1046 16.2474 30 15.1429 30H14.8571C13.7526 30 12.8571 29.1046 12.8571 28V19.1429C12.8571 18.0383 11.9617 17.1429 10.8571 17.1429H2C0.89543 17.1429 0 16.2474 0 15.1429V14.8571C0 13.7526 0.895431 12.8571 2 12.8571H10.8571C11.9617 12.8571 12.8571 11.9617 12.8571 10.8571V2C12.8571 0.89543 13.7526 0 14.8571 0H15.1429C16.2474 0 17.1429 0.895431 17.1429 2V10.8571C17.1429 11.9617 18.0383 12.8571 19.1429 12.8571H28C29.1046 12.8571 30 13.7526 30 14.8571V15.1429Z"
        fill="white"
      />
    </svg>
  );
};

const Rau = () => {
  return <span>RAU</span>;
};

const Rhu = () => {
  return <span>RHU</span>;
};

const Custom = () => {
  return <span>Nyomtató</span>;
};

const Logout = () => {
  return <span>Kijelentkezés</span>;
};

const addStyle = {
  width: "4rem",
  height: "4rem",
  backgroundColor: "#3459f0",
  borderColor: "rgba(0,0,0,0)",
};
const rauStyle = { backgroundColor: "#FF700A", color: "#fff" };
const rhuStyle = { backgroundColor: "#38ffb7", color: "#fff" };
const customStyle = { backgroundColor: "#3459f0", color: "#fff" };
const logoutStyle = { backgroundColor: "#ff0000", color: "#fff" };
const inactiveStyle = {
  backgroundColor: "#202342",
  "&:hover": {
    backgroundColor: "#000",
  },
};

// create a component named Button
const Button = ({ type, inactive, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`button${inactive ? " inactive" : ""}${
        type === "RAU"
          ? " rauButton"
          : type === "RHU"
          ? " rhuButton"
          : type === "add"
          ? " addButton"
          : type === "custom"
          ? " customButton"
          : " logoutButton"
      }`}
      style={
        type === "add"
          ? addStyle
          : inactive
          ? inactiveStyle
          : type === "RAU"
          ? rauStyle
          : type === "RHU"
          ? rhuStyle
          : type === "custom"
          ? customStyle
          : logoutStyle
      }
    >
      {type === "add" ? (
        <Plus />
      ) : type === "RAU" ? (
        <Rau />
      ) : type === "custom" ? (
        <Custom />
      ) : type === "RHU" ? (
        <Rhu />
      ) : (
        <Logout />
      )}
    </div>
  );
};

//make this component available to the app
export default Button;
