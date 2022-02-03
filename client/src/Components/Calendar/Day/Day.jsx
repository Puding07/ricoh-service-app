//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Day
let Day = (props) => {
  return <Fragment></Fragment>;
};

Day = reduxForm({
  form: "day",
})(Day);

//make this component available to the app
export default Day;
