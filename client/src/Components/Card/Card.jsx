//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named Card
let Card = (props) => {
  return <Fragment></Fragment>;
};

Card = reduxForm({
  form: "card",
})(Card);

//make this component available to the app
export default Card;
