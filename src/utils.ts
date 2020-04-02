import { MEDIA_QUERY, MODE_DARK, MODE_LIGHT } from "./constants";

export const getMatchMedia = () => {
  return window.matchMedia && window.matchMedia(MEDIA_QUERY);
};

export const getColorMode = (matchQueryList: MediaQueryList | undefined) => {
  return matchQueryList && matchQueryList.matches ? MODE_DARK : MODE_LIGHT;
};

export const getBindingEvents = (
  matchQueryList: MediaQueryList,
  handler: () => void
) => {
  if (matchQueryList.addEventListener) {
    return {
      bindEvent: () => matchQueryList.addEventListener("change", handler),
      unbindEvent: () => matchQueryList.removeEventListener("change", handler)
    };
  }

  return {
    bindEvent: () => matchQueryList.addListener(handler),
    unbindEvent: () => matchQueryList.removeListener(handler)
  };
};
