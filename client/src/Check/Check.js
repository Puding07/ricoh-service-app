import Cookies from "js-cookie";

export const emptyField = (item) => {
  if (item === "" && item === " ") return false;
  else return true;
};

export const isLogged = () => {
  if (Cookies.get("authcookie")) {
    return Cookies.get("authcookie");
  } else {
    return false;
  }
};

export const deleteCookie = () => {
  return Cookies.remove("authcookie", { path: "/" });
};

export const getAllCookies = () => {
  return Cookies.get();
};

export const getPosition = (string, subString, index) => {
  return string.split(subString, index).join(subString).length;
};
export const getLocation = () => {
  const iOfFirstSlash = 1 + getPosition(window.location.href, "/", 3);
  const iOfSecondSlash = getPosition(window.location.href, "/", 4);

  const windowLocation = window.location.href.slice(
    iOfFirstSlash,
    iOfSecondSlash || window.location.href.length
  );

  return windowLocation;
};
