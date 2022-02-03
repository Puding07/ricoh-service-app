//import liraries
import React from "react";
import "./User.scss";

// create a component named User
const User = ({ name }) => {
  return (
    <div className="user">
      <svg
        width="30"
        height="27"
        viewBox="0 0 30 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.989 7.18346C20.989 9.94904 18.5956 12.3669 15.4204 12.3669C12.2451 12.3669 9.85168 9.94904 9.85168 7.18346C9.85168 4.41787 12.2451 2 15.4204 2C18.5956 2 20.989 4.41787 20.989 7.18346Z"
          stroke="black"
          strokeOpacity="0.25"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M27.7881 25C27.7881 17.3995 23.5081 14.6694 15.5 14.6694C7.49187 14.6694 2.72034 17.3995 2.72034 25"
          stroke="black"
          strokeOpacity="0.25"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span>{name}</span>
    </div>
  );
};

//make this component available to the app
export default User;
