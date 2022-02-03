//import liraries
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { reduxForm } from "redux-form";
import Menu from "../Menu/Menu";

// create a component named Home
let Home = (props) => {
  console.log(sessionStorage.getItem("user"));

  return (
    <Fragment>
      <Menu />
      Home
    </Fragment>
  );
};

Home = reduxForm({
  form: "home",
})(Home);

//make this component available to the app
export default Home;
