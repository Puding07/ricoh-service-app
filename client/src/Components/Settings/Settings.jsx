//import liraries
import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Settings.scss";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import { logout } from "../../Api/User";
import { USER } from "../../Redux/types/Types";
import { sendPayload } from "../../Redux/actions/Payload";

// create a component named Settings
let Settings = (props) => {
  const history = useHistory();
  const refresh = () => {
    history.go(0);
  };

  const user = useSelector((state) => state.user);
  const actions = bindActionCreators({ sendPayload }, useDispatch());

  const { name, email, phone, role, performance, holiday, sickleave } = user;
  return (
    <Fragment>
      <Menu />
      <div className="mid-comp settings">
        <table className="info">
          <tbody>
            <tr>
              <th>Név: </th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Beosztás: </th>
              <td>{role}</td>
            </tr>
            <tr>
              <th>Email: </th>
              <td>
                <a href={`mailto:${email}`}>{email}</a>
              </td>
            </tr>
            <tr>
              <th>Tel.: </th>
              <td>
                <a href={`tel:${phone}`}>{phone}</a>
              </td>
            </tr>
          </tbody>
        </table>
        <Button type="logout" onClick={() => logout(refresh)} />
      </div>
    </Fragment>
  );
};

Settings = reduxForm({
  form: "settings",
})(Settings);

//make this component available to the app
export default Settings;
