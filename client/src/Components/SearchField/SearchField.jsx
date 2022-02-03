//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import "./SearchField.scss";

// create a component named SearchField
let SearchField = ({ label }) => {
  return (
    <div className="search">
      <Field
        component="input"
        placeholder={label}
        type="text"
        name="printer-search"
      />
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 0C4.71879 0 0 4.71879 0 10.5C0 16.2813 4.71879 21.0001 10.5 21.0001C13.122 21.0001 15.5176 20.0221 17.3614 18.4219L18.0001 19.0606V21.0001L26.379 29.379C27.207 30.207 28.551 30.207 29.379 29.379C30.207 28.551 30.207 27.207 29.379 26.379L21.0001 18.0001H19.0606L18.4219 17.3614C20.0221 15.5176 21.0001 13.122 21.0001 10.5C21.0001 4.71879 16.2813 0 10.5 0ZM10.5 3.00001C14.6599 3.00001 18.0001 6.34012 18.0001 10.5C18.0001 14.6599 14.6599 18.0001 10.5 18.0001C6.34012 18.0001 3.00001 14.6599 3.00001 10.5C3.00001 6.34012 6.34012 3.00001 10.5 3.00001Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

SearchField = reduxForm({
  form: "searchfield",
})(SearchField);

//make this component available to the app
export default SearchField;
