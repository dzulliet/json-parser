import React, { useCallback, useState } from 'react'
import { TextArea } from './TextArea'
import { ParsedData } from './ParsedData'
import { Controls } from './Controls'
import { Error, ParserWrap, Succes } from './styles'

/**
 * Component handling user input and basic app layout.
 */
export const Parser = (): JSX.Element => {
  const [jsonInput, setJsonInput] = useState('')
  const [parsedJsonInput, setParsedJsonInput] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSetJsonInput = useCallback((e) => setJsonInput(e.target.value), [])
  const handleParseClick = useCallback(() => {
    setSuccess('')
    setError('')
    setParsedJsonInput('')
    try {
      setParsedJsonInput(JSON.parse(jsonInput))
    } catch (e) {
      setError('Invalid JSON')
    }
  }, [jsonInput])
  const handleClearClick = useCallback(() => {
    setJsonInput('')
    setParsedJsonInput('')
    setSuccess('')
    setError('')
  }, [])
  const handleCopyToClipboard = useCallback(async () => {
    await navigator.clipboard.writeText(JSON.stringify(parsedJsonInput, null, 4))
    setError('')
    setSuccess('Successfully copied to clipboard.')
  }, [parsedJsonInput])

  return (
    <ParserWrap>
      {error && <Error>{error}</Error>}
      {success && <Succes>{success}</Succes>}
      <TextArea name="jsonInput" onChange={handleSetJsonInput} value={jsonInput} />
      <Controls
        onParseClick={handleParseClick}
        onClearClick={handleClearClick}
        onCopyToClipboardClick={handleCopyToClipboard}
        displayCopyButton={!!parsedJsonInput}
      />
      <ParsedData name="parsedJsonInput" parsedJson={parsedJsonInput} />
    </ParserWrap>
  )
}
