import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthForm from "../Components/Auth/Auth";
import FocusedItem from "../Components/FocusedItem/FocusedItem";
import Home from "../Components/Home/Home";
import Parts from "../Components/Parts/Parts";
import Printers from "../Components/Printers/Printers";
import Settings from "../Components/Settings/Settings";
import Stock from "../Components/Stock/Stock";
import FocusedPart from "../Components/FocusedPart/FocusedPart";
import { isLogged } from "../Check/Check";

const checkLoggedIn = (Rendered) => {
  return !isLogged() ? <Redirect to="/auth" /> : <Rendered />;
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        {checkLoggedIn(Home)}
      </Route>
      <Route path="/home">{checkLoggedIn(Home)}</Route>
      <Route path="/auth">
        {isLogged() ? <Redirect to="/home" /> : <AuthForm />}
      </Route>
      <Route exact path="/printers">
        {checkLoggedIn(Printers)}
      </Route>
      <Route exact path="/rau/printers">
        {checkLoggedIn(Printers)}
      </Route>
      <Route exact path="/rhu/printers">
        {checkLoggedIn(Printers)}
      </Route>
      <Route path="/rau/printers/:serial">{checkLoggedIn(FocusedItem)}</Route>
      <Route path="/rhu/printers/:serial">{checkLoggedIn(FocusedItem)}</Route>
      <Route exact path="/rau/parts">
        {checkLoggedIn(Parts)}
      </Route>
      <Route exact path="/rhu/parts">
        {checkLoggedIn(Parts)}
      </Route>
      <Route path="/rau/parts/:partno">{checkLoggedIn(FocusedPart)}</Route>
      <Route path="/rhu/parts/:partno">{checkLoggedIn(FocusedPart)}</Route>
      <Route path="/stock">{checkLoggedIn(Stock)}</Route>
      <Route path="/settings">{checkLoggedIn(Settings)}</Route>
    </Switch>
  );
};

export default Routes;
