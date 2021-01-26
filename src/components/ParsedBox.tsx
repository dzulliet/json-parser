import React, { ChangeEvent, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

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

const formatValue = (value: any) => {
  let formattedValue
  if (typeof value === 'string') {
    formattedValue = <span>{`"${value.trim()}",\r\n`}</span>
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    formattedValue = <span>{`${value},\r\n`}</span>
  } else if (typeof value === 'object') {
    formattedValue = beautify(value)
  }
  return formattedValue
}

const beautify = (parsedJson?: any): JSX.Element => {
  let formattedJson
  if (Array.isArray(parsedJson)) {
    formattedJson = (
      <>
        <span>{`[\r\n`}</span>
        {parsedJson.map((item) => formatValue(item))}
        <span>{`]\r\n`}</span>
      </>
    )
  } else if (typeof parsedJson === 'object' && parsedJson !== null) {
    formattedJson = (
      <>
        <span>{`{\r\n`}</span>
        {Object.entries(parsedJson).map(([key, value]) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <span>
              <span>{`"${key}": `}</span>
              {formatValue(value)}
            </span>
          )
        })}
        <span>{`}\r\n`}</span>
      </>
    )
  }

  return <span>{formattedJson}</span>
}

export const ParsedBox = ({ name, parsedJson, onChange, className }: Props): JSX.Element => {
  return (
    <Wrap>
      <StyledPre>
        <StyledDiv>{beautify(parsedJson)}</StyledDiv>
      </StyledPre>
    </Wrap>
  )
}
