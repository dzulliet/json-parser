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
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  background-color: white;
`

const formatValue = (value: any) => {
  let formattedValue
  if (typeof value === 'string') {
    formattedValue = <span>{`"${value}",\n`}</span>
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    formattedValue = <span>{`${value},\n`}</span>
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
        <div>{`[`}</div>
        {parsedJson.map((item) => {
          let formattedValue
          if (typeof item === 'string') {
            formattedValue = <span>{`"${item}",\n`}</span>
          } else if (typeof item === 'number' || typeof item === 'boolean' || item === null) {
            formattedValue = <span>{`${item},\n`}</span>
          } else if (typeof item === 'object') {
            formattedValue = beautify(item)
            // if (Array.isArray(item)) {
            //   formattedValue = <div>{beautify(item)}</div>
            // } else {
            //   formattedValue = <div>{beautify(item)}</div>
            // }
          }
          return formattedValue
        })}
        <div>{`]`}</div>
      </>
    )
  } else if (typeof parsedJson === 'object' && parsedJson !== null) {
    formattedJson = (
      <>
        <div>{`{`}</div>
        {Object.entries(parsedJson).map(([key, value]) => {
          let formattedValue
          if (typeof value === 'string') {
            formattedValue = <span>{`"${value}",\n`}</span>
          } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
            formattedValue = <span>{`${value},\n`}</span>
          } else if (typeof value === 'object') {
            formattedValue = beautify(value)
            // if (Array.isArray(value)) {
            //   // formattedValue = (
            //   //   <div>
            //   //     <div>{`"${key}":`}</div>
            //   //     {beautify(value)}
            //   //   </div>
            //   // )
            // } else {
            //   // formattedValue = (
            //   //   <div>
            //   //     <div>{`"${key}":`}</div>
            //   //     {beautify(value)}
            //   //   </div>
            //   // )
            // }
          }
          return (
            // eslint-disable-next-line react/jsx-key
            <>
              <span>{`"${key}": `}</span>
              {formattedValue}
            </>
          )
        })}
        <div>{`}`}</div>
      </>
    )
  }

  return <pre>{formattedJson}</pre>
  // return <pre>{JSON.stringify(parsedJson, null, 2)}</pre>
}

export const ParsedBox = ({ name, parsedJson, onChange, className }: Props): JSX.Element => {
  return (
    <Wrap>
      <StyledDiv>{beautify(parsedJson)}</StyledDiv>
    </Wrap>
  )
}
