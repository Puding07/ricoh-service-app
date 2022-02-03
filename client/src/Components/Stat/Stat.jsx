//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Stat
let Stat = (props) => {
  return <Fragment></Fragment>;
};

Stat = reduxForm({
  form: "stat",
})(Stat);

//make this component available to the app
export default Stat;
