//import liraries
import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector } from "react-redux";
import "./Chat.scss";

// create a component named Chat
let Chat = (props) => {
  const menuState = useSelector((state) => state.menuReducer);
  const { activeElem } = menuState;

  if (activeElem !== "auth") return <div className="chat"></div>;
  else return <div></div>;
};

Chat = reduxForm({
  form: "chat",
})(Chat);

//make this component available to the app
export default Chat;
