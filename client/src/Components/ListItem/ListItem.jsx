//import liraries
import React from "react";
import "./ListItem.scss";
import StatusIcon from "../StatusIcon/StatusIcon";
import Level from "../Level/Level";
import User from "../User/User";
import ItemButton from "../ItemButton/ItemButton";
import Status from "../Status/Status";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { sendPayload } from "../../Redux/actions/Payload";
import { useHistory } from "react-router";

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

// create a component named ListItem
const ListItem = ({
  _id,
  name,
  serial,
  status,
  user,
  alert,
  level,
  disabled,
  clickable,
}) => {
  // Active Element is an _id which will be displayed in this component

  const actions = bindActionCreators({ sendPayload }, useDispatch());

  const history = useHistory();

  const handleCLick = () => {
    actions.sendPayload("open", _id);

    const thirdSlash = getPosition(window.location.href, "/", 3);

    const link =
      window.location.href.slice(thirdSlash, window.location.href.length) +
      `/${serial}`;

    history.push(link);
  };

  return (
    <div
      className={`list-item${disabled ? " " + disabled : ""}`}
      id={_id}
      onClick={clickable ? () => handleCLick() : {}}
    >
      <div className="grid">
        <div className="banner"></div>
        <div className="name">{name}</div>
        <div className="serial">{serial}</div>
        <Status status={status} />
        <div className="ual">
          <User name={user} />
          <StatusIcon level={alert} />
          <Level level={level} />
        </div>
      </div>
      <ItemButton style={{ top: "-0.5rem", left: "-1rem" }} type="user" />
      <ItemButton
        style={{ backgroundColor: "#ff0000", top: "-0.5rem", right: "-1rem" }}
        type="delete"
      />
    </div>
  );
};

//make this component available to the app
export default ListItem;
