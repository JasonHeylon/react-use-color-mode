import { MEDIA_QUERY, MODE_DARK, MODE_LIGHT } from './constants';
import { colors } from './teyps';

export const getMatchMedia = (): MediaQueryList => {
  return window.matchMedia && window.matchMedia(MEDIA_QUERY);
};

export const getColorMode = (
  matchQueryList: MediaQueryList | undefined
): colors => {
  return matchQueryList && matchQueryList.matches ? MODE_DARK : MODE_LIGHT;
};

export const getBindingEvents = (
  matchQueryList: MediaQueryList,
  handler: () => void
): { bindEvent: () => void; unbindEvent: () => void } => {
  if (matchQueryList.addEventListener) {
    return {
      bindEvent: (): void => matchQueryList.addEventListener('change', handler),
      unbindEvent: (): void =>
        matchQueryList.removeEventListener('change', handler),
    };
  }

  return {
    bindEvent: (): void => matchQueryList.addListener(handler),
    unbindEvent: (): void => matchQueryList.removeListener(handler),
  };
};
