import React, { ChangeEvent, useCallback, useState } from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  parsedJson?: any
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

type StructureType = 'array' | 'object'

type BeautifiedDataProps = {
  data?: any
  delimiter?: string
}

type ChildrenProps = {
  type: StructureType
  data: any
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
const BracketButtonSpan = styled.span`
  display: inline-flex;
`

const formatValue = (value: any, delimiter = ''): string | JSX.Element | undefined => {
  let formattedValue
  if (typeof value === 'string') {
    formattedValue = `"${value.trim()}"${delimiter}\r\n`
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    formattedValue = `${value}${delimiter}\r\n`
  } else if (typeof value === 'object') {
    formattedValue = <BeautifiedData data={value} delimiter={delimiter} />
  }
  return formattedValue
}

const brackets = {
  array: { left: '[', right: ']' },
  object: { left: '{', right: '}' },
}
const Children = ({ type, data }: ChildrenProps) => {
  const isObject = type === 'object'
  const dataToMap = isObject ? Object.entries(data) : data

  return dataToMap.map((item: any, index: number) => {
    const delimiter = dataToMap.length - 1 === index ? '' : ','
    const value = isObject ? item[1] : item
    return (
      <IndentedSpan key={index}>
        {isObject ? `"${item[0]}": ` : ''}
        {formatValue(value, delimiter)}
      </IndentedSpan>
    )
  })
}

const BeautifiedData = ({ data, delimiter = '' }: BeautifiedDataProps): JSX.Element | null => {
  const [displayChildren, setDisplayChildren] = useState(true)
  const toggleDisplayChildren = useCallback(() => setDisplayChildren(!displayChildren), [displayChildren])
  if (data) {
    const type = Array.isArray(data) ? 'array' : 'object'
    return (
      <>
        <BracketButtonSpan>
          {`${brackets[type].left}\r\n`}
          <button onClick={toggleDisplayChildren}>{displayChildren ? '-' : '+'}</button>
        </BracketButtonSpan>
        {displayChildren && <Children type={type} data={data} />}
        {`${brackets[type].right}${delimiter}\r\n`}
      </>
    )
  }
  return null
}

export const ParsedBox = ({ parsedJson }: Props): JSX.Element => {
  return (
    <Wrap>
      <DataBox>
        <Pre>
          <BeautifiedData data={parsedJson} />
        </Pre>
      </DataBox>
    </Wrap>
  )
}
