//import liraries
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Components/Mobile/Home/Home";

// create a component named MobileRoutes
const MobileRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

//make this component available to the app
export default MobileRoutes;
