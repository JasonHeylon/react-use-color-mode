import React from "react";

import { useColorMode } from "react-use-color-mode";

const App = () => {
  const [colorMode] = useColorMode();

  const styles =
    colorMode === "dark"
      ? {
          backgroundPositionY: "75%",
          color: "rgb(231, 232, 235)"
        }
      : {
          backgroundPositionY: "0",
          color: "black"
        };

  return (
    <div className="container" style={styles}>
      <h2>Your color Mode is {colorMode}</h2>

      <strong>
        Try to switch {colorMode === "dark" ? "light" : "dark"} mode
      </strong>
    </div>
  );
};
export default App;
