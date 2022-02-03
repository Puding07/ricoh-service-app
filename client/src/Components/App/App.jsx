import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { isMobile } from "react-device-detect";

import store from "../../Redux/Store";
import Routes from "../../Routes/Routes";
import MobileRoutes from "../../Routes/MobileRoutes";
import { popSessionData } from "../../Storage/appStorage";

export const App = (props) => {
  popSessionData();

  return (
    <Provider store={store}>
      <Router>
        <Fragment>{!isMobile ? <Routes /> : <MobileRoutes />}</Fragment>
      </Router>
    </Provider>
  );
};
