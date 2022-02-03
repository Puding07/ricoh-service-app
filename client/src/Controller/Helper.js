import { getPosition } from "../Check/Check";

export const getRegion = () => {
  const thirdSlash = getPosition(window.location.href, "/", 3) + 1;
  const fourthSlash = getPosition(window.location.href, "/", 4);

  const region = window.location.href.slice(thirdSlash, fourthSlash);

  return region;
};
