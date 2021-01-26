import React, { useCallback, useState } from 'react'
import './App.css'

const App = (): JSX.Element => {
  const [json, setJson] = useState('')
  const handleSetJson = useCallback((e) => setJson(e.target.value), [])
  return (
    <div className="App">
      <div className="parser">
        <div className="textArea">
          <textarea value={json} onChange={handleSetJson} />
        </div>
        <div className="controls">controls here</div>
        <div className="parsedData">parsed data here</div>
      </div>
    </div>
  )
}

export default App
