import React, { useCallback, useState } from 'react'
import { BracketButtonSpan, IndentedSpan } from './styles'

type StructureType = 'array' | 'object'

type BeautifiedDataProps = {
  data?: any
  delimiter?: string
}

type ChildrenProps = {
  type: StructureType
  data: any
}

const brackets = {
  array: { left: '[', right: ']' },
  object: { left: '{', right: '}' },
}

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

export const BeautifiedData = ({ data, delimiter = '' }: BeautifiedDataProps): JSX.Element | null => {
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
