import React, { ChangeEvent } from 'react'
import { BeautifiedData } from './BeautifiedData'
import { DataBox, Label, ParsedDataWrap, Pre } from './styles'

type Props = {
  name: string
  parsedJson?: any
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

/**
 * Container of parsed JSON
 * @param parsedJson - parsed JSON input, not yet beautified
 */
export const ParsedData = ({ parsedJson }: Props): JSX.Element => {
  return (
    <ParsedDataWrap>
      <Label>Formatted JSON data</Label>
      <DataBox>
        <Pre>
          <BeautifiedData data={parsedJson} />
        </Pre>
      </DataBox>
    </ParsedDataWrap>
  )
}
