import React, { useCallback, useState } from 'react'
import { TextArea } from './TextArea'
import { ParsedBox } from './ParsedBox'
import { Controls } from './Controls'
import { mockJson } from '../assets/mockJson'
import { ParserWrap } from './styles'

export const Parser = (): JSX.Element => {
  const [json, setJson] = useState(mockJson)
  const handleSetJson = useCallback((e) => setJson(e.target.value), [])
  const [jsonOutput, setJsonOutput] = useState('')

  const handleParseClick = useCallback(() => {
    setJsonOutput(JSON.parse(json))
  }, [json])
  const handleClearClick = useCallback(() => {
    setJson(mockJson) //fixme
    setJsonOutput('')
  }, [])

  return (
    <ParserWrap>
      <TextArea name="jsonInput" onChange={handleSetJson} value={json} />
      <Controls onParseClick={handleParseClick} onClearClick={handleClearClick} />
      <ParsedBox name="jsonOutput" parsedJson={jsonOutput} />
    </ParserWrap>
  )
}
