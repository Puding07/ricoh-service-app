//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Message
let Message = (props) => {
  return <Fragment></Fragment>;
};

Message = reduxForm({
  form: "message",
})(Message);

//make this component available to the app
export default Message;
