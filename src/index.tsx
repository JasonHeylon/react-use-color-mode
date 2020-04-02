import { useState, useEffect } from "react";

import { getColorMode, getMatchMedia, getBindingEvents } from "./utils";
import { colors } from "./teyps";

export const useColorMode = () => {
  const [colorMode, setColorMode] = useState<colors>(
    getColorMode(getMatchMedia())
  );

  const handleChange = () => setColorMode(getColorMode(getMatchMedia()));
  useEffect(() => {
    const { bindEvent, unbindEvent } = getBindingEvents(
      getMatchMedia(),
      handleChange
    );
    bindEvent();

    return unbindEvent;
  }, []);

  return [colorMode];
};
