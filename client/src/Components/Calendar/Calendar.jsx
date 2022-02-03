//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Calendar
let Calendar = (props) => {
  return <Fragment></Fragment>;
};

Calendar = reduxForm({
  form: "calendar",
})(Calendar);

//make this component available to the app
export default Calendar;
