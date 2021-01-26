import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  parsedJson?: any
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

const Wrap = styled.div`
  padding: 1rem;
  flex: 3;
  min-width: 200px;
  min-height: 200px;
`

const DataBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  background-color: white;
  overflow: auto;
  max-height: calc(100vh - 8rem);
`
const Pre = styled.pre`
  margin: 0;
`

const IndentedSpan = styled.span`
  display: block;
  padding-left: 30px;
`

const formatValue = (value: any, delimiter = '') => {
  let formattedValue
  if (typeof value === 'string') {
    formattedValue = `"${value.trim()}"${delimiter}\r\n`
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    formattedValue = `${value}${delimiter}\r\n`
  } else if (typeof value === 'object') {
    formattedValue = beautify(value, delimiter)
  }
  return formattedValue
}

const beautify = (parsedJson?: any, delimiter = ''): JSX.Element => {
  let formattedJson
  if (Array.isArray(parsedJson)) {
    formattedJson = (
      <>
        {`[\r\n`}
        {parsedJson.map((item, index) => {
          const delimiter = parsedJson.length - 1 === index ? '' : ','
          return <IndentedSpan key={index}>{formatValue(item, delimiter)}</IndentedSpan>
        })}
        {`]${delimiter}\r\n`}
      </>
    )
  } else if (typeof parsedJson === 'object' && parsedJson !== null) {
    formattedJson = (
      <>
        {`{\r\n`}
        {Object.entries(parsedJson).map(([key, value], index) => {
          const delimiter = Object.keys(parsedJson).length - 1 === index ? '' : ','
          return (
            <IndentedSpan key={index}>
              {`"${key}": `}
              {formatValue(value, delimiter)}
            </IndentedSpan>
          )
        })}
        {`}${delimiter}\r\n`}
      </>
    )
  }

  return <>{formattedJson}</>
}

export const ParsedBox = ({ parsedJson }: Props): JSX.Element => {
  return (
    <Wrap>
      <DataBox>
        <Pre>{beautify(parsedJson)}</Pre>
      </DataBox>
    </Wrap>
  )
}
