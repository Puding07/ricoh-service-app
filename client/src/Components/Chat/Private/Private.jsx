//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Private
let Private = (props) => {
  return <Fragment></Fragment>;
};

Private = reduxForm({
  form: "private",
})(Private);

//make this component available to the app
export default Private;
