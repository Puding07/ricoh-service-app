//import liraries
import React from "react";
import "./ChatHead.scss";

// create a component named ChatHead
const ChatHead = ({ name, img, color }) => {
  return (
    <div
      className="chat-head"
      style={{
        backgroundColor: img ? "transparent" : color,
      }}
    >
      {img ? <img src={img} /> : ""}
      <h1 style={{ display: img ? "none" : "block" }}>{name}</h1>
    </div>
  );
};

//make this component available to the app
export default ChatHead;
