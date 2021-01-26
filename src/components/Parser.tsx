import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { TextArea } from './TextArea'
import { ParsedBox } from './ParsedBox'
import { Controls } from './Controls'
import { mockJson } from '../assets/mockJson'

const ParserWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 2;

  @media (max-width: 900px) {
    flex: 0;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const Parser = (): JSX.Element => {
  const [json, setJson] = useState(mockJson)
  const handleSetJson = useCallback((e) => setJson(e.target.value), [])
  const [jsonOutput, setJsonOutput] = useState('')

  const handleParseClick = useCallback(() => {
    setJsonOutput(JSON.parse(json))
  }, [json])
  const handleClearClick = useCallback(() => {
    setJson(mockJson)
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
