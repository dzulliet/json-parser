import React, { useCallback, useState } from 'react'
import { BracketButtonSpan, CollapsableButton, IndentedSpan } from './styles'

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

/**
 * Function formatting value to be displayed correctly. Value can be a 'string' which requires to be
 * closed in double quotation marks, or a 'number', 'boolean' or 'null' which are standalone. Value can
 * also be and 'object' (which means object or array) and such a value is a node and needs to be
 * send to recursive component BeautifiedData.
 * @param value - string, number, boolean, null, object
 * @param delimiter - if value is not a last element, delimiter is added
 */
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

/**
 * Component for cycling through children of a node
 * @param type - has value of 'array' or 'object' to decide how to process data
 * @param data
 */
const Children = ({ type, data }: ChildrenProps) => {
  const isObject = type === 'object'
  const mappableData = isObject ? Object.entries(data) : data

  return mappableData.map((item: any, index: number) => {
    /* delimiter has value according to if 'item' is a last element in a structure */
    const delimiter = mappableData.length - 1 === index ? '' : ','
    /* when mapping object entries 'item' is an array consisting of key and value  */
    const value = isObject ? item[1] : item
    return (
      <IndentedSpan key={index}>
        {isObject ? `"${item[0]}": ` : ''}
        {formatValue(value, delimiter)}
      </IndentedSpan>
    )
  })
}

/**
 * Recursive component for beautifying inputted data
 * @param data - data to be beautified
 * @param delimiter - has value when delimiter should be used (last element has no commas)
 */
export const BeautifiedData = ({ data, delimiter = '' }: BeautifiedDataProps): JSX.Element | null => {
  /* state for collapsing/expanding nodes */
  const [displayChildren, setDisplayChildren] = useState(true)
  const toggleDisplayChildren = useCallback(() => setDisplayChildren(!displayChildren), [displayChildren])
  if (data) {
    const type: StructureType = Array.isArray(data) ? 'array' : 'object'
    return (
      <>
        <BracketButtonSpan>
          {`${brackets[type].left}\r\n`}
          <CollapsableButton onClick={toggleDisplayChildren}>{displayChildren ? '-' : '+'}</CollapsableButton>
        </BracketButtonSpan>
        {displayChildren && <Children type={type} data={data} />}
        {`${brackets[type].right}${delimiter}\r\n`}
      </>
    )
  }
  return null
}
