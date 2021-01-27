import React, { ChangeEvent } from 'react'
import { BeautifiedData } from './BeautifiedData'
import { DataBox, Label, ParsedDataWrap, Pre, TextAreaWrap } from './styles'

type Props = {
  name: string
  parsedJson?: any
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

export const ParsedBox = ({ parsedJson }: Props): JSX.Element => {
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
