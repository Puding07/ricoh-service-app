//import liraries
import React from "react";
import "./ItemButton.scss";

const User = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 10C14.3417 10 15.8334 8.50834 15.8334 6.66668C15.8334 4.82501 14.3417 3.33334 12.5 3.33334C10.6584 3.33334 9.16671 4.82501 9.16671 6.66668C9.16671 8.50834 10.6584 10 12.5 10ZM5.00004 8.33334V5.83334H3.33337V8.33334H0.833374V10H3.33337V12.5H5.00004V10H7.50004V8.33334H5.00004ZM12.5 11.6667C10.275 11.6667 5.83337 12.7833 5.83337 15V16.6667H19.1667V15C19.1667 12.7833 14.725 11.6667 12.5 11.6667Z"
        fill="white"
      />
    </svg>
  );
};

const Edit = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 11.8754V15H3.12457L12.34 5.78461L9.21539 2.66005L0 11.8754ZM14.7563 3.36828C15.0812 3.04333 15.0812 2.5184 14.7563 2.19345L12.8066 0.243716C12.4816 -0.0812387 11.9567 -0.0812387 11.6317 0.243716L10.1069 1.7685L13.2315 4.89307L14.7563 3.36828Z"
        fill="white"
      />
    </svg>
  );
};

const Delete = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.99996 15.8333C4.99996 16.75 5.74996 17.5 6.66663 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V5.83333H4.99996V15.8333ZM6.66663 7.5H13.3333V15.8333H6.66663V7.5ZM12.9166 3.33333L12.0833 2.5H7.91663L7.08329 3.33333H4.16663V5H15.8333V3.33333H12.9166Z"
        fill="white"
      />
    </svg>
  );
};

// create a component named ItemButton
const ItemButton = ({ type, disabled, style }) => {
  return (
    <div className="item-button" style={style}>
      {!disabled && type === "user" ? (
        <User />
      ) : type === "edit" ? (
        <Edit />
      ) : (
        <Delete />
      )}
    </div>
  );
};

//make this component available to the app
export default ItemButton;
