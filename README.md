# react-use-color-mode 🌗

> A react hook to detect dark or light mode of system

[![NPM](https://img.shields.io/npm/v/react-use-color-mode.svg)](https://www.npmjs.com/package/react-use-color-mode) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-color-mode
```

## Usage

```tsx
import * as React from 'react';

import { useColorMode } from 'react-use-color-mode';

const Example = () => {
  const colorMode = useColorMode();
  return (
    <div>
      <h2>Your color Mode is {colorMode}</h2>
    </div>
  );
};
```

## [Demo](http://blog.jasonheylon.com/react-use-color-mode)

## License

MIT © [JasonHeylon](https://github.com/JasonHeylon)
