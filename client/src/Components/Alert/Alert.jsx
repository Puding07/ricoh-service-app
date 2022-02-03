//import liraries
import React from "react";
import "./Alert.scss";

// create a component named Alert
const Alert = (props) => {
  const { title, message, close } = props;
  return (
    <div className="alert-message">
      <h1>{title}</h1>
      <span>{message}</span>
      <input type="button" value="Ok" onClick={close} />
    </div>
  );
};

//make this component available to the app
export default Alert;
