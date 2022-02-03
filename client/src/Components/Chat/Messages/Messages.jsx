//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Messages
let Messages = (props) => {
  return <Fragment></Fragment>;
};

Messages = reduxForm({
  form: "messages",
})(Messages);

//make this component available to the app
export default Messages;
