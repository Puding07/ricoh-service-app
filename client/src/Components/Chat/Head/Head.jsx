//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Head
let Head = (props) => {
  return <Fragment></Fragment>;
};

Head = reduxForm({
  form: "head",
})(Head);

//make this component available to the app
export default Head;
