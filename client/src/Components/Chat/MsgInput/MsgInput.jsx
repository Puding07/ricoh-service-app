//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named MsgInput
let MsgInput = (props) => {
  return <Fragment></Fragment>;
};

MsgInput = reduxForm({
  form: "msginput",
})(MsgInput);

//make this component available to the app
export default MsgInput;
