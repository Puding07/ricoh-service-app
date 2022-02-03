//import liraries
import React from "react";
import "./InputField.scss";

// create a component named SearchField
let InputField = ({ label, state, list }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder={label}
        ref={state}
        list={list}
        name="printer-search"
      />
    </div>
  );
};

//make this component available to the app
export default InputField;
