//import liraries
import React from "react";
import "./CheckBox.scss";

let stateName = "";

// create a component named Checkbox
let Checkbox = ({
  name,
  first,
  up,
  labelStyle,
  boxStyle,
  disabled,
  checked,
  onClick,
}) => {
  stateName = name;
  const idName = name.replace(/ /g, "").toLowerCase();

  return (
    <label className={`label_checkbox${up ? " up" : ""}`} htmlFor={idName}>
      {first && (
        <span className="name" style={labelStyle && labelStyle}>
          {name}
        </span>
      )}
      <label className="checkbox">
        <span className="checkbox__input">
          <input
            id={idName}
            disabled={disabled}
            type="checkbox"
            checked={checked}
            name={idName}
            onChange={() => onClick()}
          />
          <span className="checkbox__control" style={boxStyle && boxStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
              />
            </svg>
          </span>
        </span>
      </label>
      {!first && (
        <span className="name" style={labelStyle && labelStyle}>
          {name}
        </span>
      )}
    </label>
  );
};

//make this component available to the app
export default Checkbox;
