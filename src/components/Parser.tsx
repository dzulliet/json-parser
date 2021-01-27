import React, { useCallback, useRef, useState } from 'react'
import { TextArea } from './TextArea'
import { ParsedBox } from './ParsedBox'
import { Controls } from './Controls'
import { mockJson } from '../assets/mockJson'
import { CopyTextArea, Error, ParserWrap, Succes, TextAreaWrap } from './styles'

export const Parser = (): JSX.Element => {
  const [json, setJson] = useState(mockJson)
  const handleSetJson = useCallback((e) => setJson(e.target.value), [])
  const [jsonOutput, setJsonOutput] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleParseClick = useCallback(() => {
    try {
      setJsonOutput(JSON.parse(json))
    } catch (e) {
      setError('Invalid JSON')
      console.log(e)
    }
  }, [json])
  const handleClearClick = useCallback(() => {
    setJson(mockJson) //fixme
    setJsonOutput('')
    setSuccess('')
    setError('')
  }, [])
  const handleCopyToClipboard = useCallback(() => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.select()
      document.execCommand('copy')
      setSuccess('Successfully copied to clipboard.')
    }
  }, [])

  return (
    <ParserWrap>
      {error && <Error>{error}</Error>}
      {success && <Succes>{success}</Succes>}
      <TextArea name="jsonInput" onChange={handleSetJson} value={json} error={error} />
      <Controls
        onParseClick={handleParseClick}
        onClearClick={handleClearClick}
        onCopyToClipboardClick={handleCopyToClipboard}
        displayCopyButton={!!jsonOutput}
      />
      <ParsedBox name="jsonOutput" parsedJson={jsonOutput} />
      <CopyTextArea ref={textAreaRef} value={JSON.stringify(jsonOutput, null, 4)} readOnly />
    </ParserWrap>
  )
}
