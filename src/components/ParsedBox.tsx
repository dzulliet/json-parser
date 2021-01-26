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

const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  background-color: white;
  overflow: auto;
  max-height: calc(100vh - 8rem);
`
const StyledPre = styled.pre`
  margin: 0;
`

const StyledSpan = styled.span`
  margin-left: 30px;
`

const formatValue = (value: any, delimiter = '') => {
  let formattedValue
  if (typeof value === 'string') {
    formattedValue = <span>{`"${value.trim()}"${delimiter}\r\n`}</span>
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    formattedValue = <span>{`${value}${delimiter}\r\n`}</span>
  } else if (typeof value === 'object') {
    formattedValue = <span>{beautify(value, delimiter)}</span>
  }
  return formattedValue
}

const beautify = (parsedJson?: any, delimiter = ''): JSX.Element => {
  let formattedJson
  if (Array.isArray(parsedJson)) {
    formattedJson = (
      <>
        <span>{`[\r\n`}</span>
        {parsedJson.map((item, index) => {
          const delimiter = parsedJson.length - 1 === index ? '' : ','
          return formatValue(item, delimiter)
        })}
        <span>{`]${delimiter}\r\n`}</span>
      </>
    )
  } else if (typeof parsedJson === 'object' && parsedJson !== null) {
    formattedJson = (
      <>
        <span>{`{\r\n`}</span>
        {Object.entries(parsedJson).map(([key, value], index) => {
          const delimiter = Object.keys(parsedJson).length - 1 === index ? '' : ','
          return (
            <span key={index}>
              <span>{`"${key}": `}</span>
              {formatValue(value, delimiter)}
            </span>
          )
        })}
        <span>{`}${delimiter}\r\n`}</span>
      </>
    )
  }

  return <span>{formattedJson}</span>
}

export const ParsedBox = ({ parsedJson }: Props): JSX.Element => {
  return (
    <Wrap>
      <StyledDiv>
        <StyledPre>{beautify(parsedJson)}</StyledPre>
      </StyledDiv>
    </Wrap>
  )
}
