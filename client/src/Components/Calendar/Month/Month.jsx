//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Month
let Month = (props) => {
  return <Fragment></Fragment>;
};

Month = reduxForm({
  form: "month",
})(Month);

//make this component available to the app
export default Month;
