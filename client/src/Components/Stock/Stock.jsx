//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import Menu from "../Menu/Menu";

// create a component named Stock
let Stock = (props) => {
  return (
    <Fragment>
      <Menu />
    </Fragment>
  );
};

Stock = reduxForm({
  form: "printers",
})(Stock);

//make this component available to the app
export default Stock;
