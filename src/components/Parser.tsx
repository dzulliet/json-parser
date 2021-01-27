import React, { useCallback, useRef, useState } from 'react'
import { TextArea } from './TextArea'
import { ParsedData } from './ParsedData'
import { Controls } from './Controls'
import { CopyTextArea, Error, ParserWrap, Succes } from './styles'

export const Parser = (): JSX.Element => {
  const [json, setJson] = useState('')
  const handleSetJson = useCallback((e) => setJson(e.target.value), [])
  const [jsonOutput, setJsonOutput] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleParseClick = useCallback(() => {
    setSuccess('')
    setError('')
    setJsonOutput('')
    try {
      setJsonOutput(JSON.parse(json))
    } catch (e) {
      setError('Invalid JSON')
      console.log(e)
    }
  }, [json])
  const handleClearClick = useCallback(() => {
    setJson('')
    setJsonOutput('')
    setSuccess('')
    setError('')
  }, [])
  const handleCopyToClipboard = useCallback(() => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.select()
      document.execCommand('copy')
      setError('')
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
      <ParsedData name="jsonOutput" parsedJson={jsonOutput} />
      <CopyTextArea ref={textAreaRef} value={JSON.stringify(jsonOutput, null, 4)} readOnly />
    </ParserWrap>
  )
}
