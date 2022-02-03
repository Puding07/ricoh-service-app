//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Group
let Group = (props) => {
  return <Fragment></Fragment>;
};

Group = reduxForm({
  form: "group",
})(Group);

//make this component available to the app
export default Group;
