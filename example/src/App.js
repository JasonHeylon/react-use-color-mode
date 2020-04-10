import React from 'react';

import { useColorMode } from 'react-use-color-mode';

const App = () => {
  const colorMode = useColorMode();

  const colorModeEmoji = colorMode === 'dark' ? '🌑' : '🌕';

  return (
    <div className={`container ${colorMode}`}>
      <h1>
        <a href='https://github.com/JasonHeylon/react-use-color-mode'>
          react-use-color-mode
        </a>
        <span>{colorModeEmoji}</span>
      </h1>

      <h2>Your system's mode is {colorMode}</h2>

      <strong>
        Try to switch to {colorMode === 'dark' ? 'light' : 'dark'} mode of your
        system
      </strong>

      <footer>
        by
        <a href='https://github.com/JasonHeylon'> JasonHeylon</a>
      </footer>
    </div>
  );
};
export default App;
