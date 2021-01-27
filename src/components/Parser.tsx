import React, { useCallback, useRef, useState } from 'react'
import { TextArea } from './TextArea'
import { ParsedBox } from './ParsedBox'
import { Controls } from './Controls'
import { mockJson } from '../assets/mockJson'
import { CopyTextArea, ParserWrap } from './styles'

export const Parser = (): JSX.Element => {
  const [json, setJson] = useState(mockJson)
  const handleSetJson = useCallback((e) => setJson(e.target.value), [])
  const [jsonOutput, setJsonOutput] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleParseClick = useCallback(() => {
    setJsonOutput(JSON.parse(json))
  }, [json])
  const handleClearClick = useCallback(() => {
    setJson(mockJson) //fixme
    setJsonOutput('')
  }, [])
  const handleCopyToClipboard = useCallback(() => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.select()
      document.execCommand('copy')
    }
  }, [])

  return (
    <ParserWrap>
      <TextArea name="jsonInput" onChange={handleSetJson} value={json} />
      <Controls
        onParseClick={handleParseClick}
        onClearClick={handleClearClick}
        onCopyToClipboardClick={handleCopyToClipboard}
        displayCopyButton={!!jsonOutput}
      />
      <ParsedBox name="jsonOutput" parsedJson={jsonOutput} />
      <CopyTextArea ref={textAreaRef} value={JSON.stringify(jsonOutput, null, 4)} />
    </ParserWrap>
  )
}
