//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";

// create a component named CircleGraph
let CircleGraph = (props) => {
  return <Fragment></Fragment>;
};

CircleGraph = reduxForm({
  form: "circlegraph",
})(CircleGraph);

//make this component available to the app
export default CircleGraph;
