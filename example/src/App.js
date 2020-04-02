import React from 'react'

import { useMyHook } from 'react-use-color-mode'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
