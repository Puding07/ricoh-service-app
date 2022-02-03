//import liraries
import React from "react";
import "./Exit.scss";

// create a component named Exit
const Exit = (props) => {
  const { close } = props;
  return (
    <div
      className="exit"
      onClick={(e) => e.target.className === "exit" && close()}
    >
      {props.children}
    </div>
  );
};

//make this component available to the app
export default Exit;
