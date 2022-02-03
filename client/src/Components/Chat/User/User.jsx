//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named User
let User = (props) => {
  return <Fragment></Fragment>;
};

User = reduxForm({
  form: "user",
})(User);

//make this component available to the app
export default User;
