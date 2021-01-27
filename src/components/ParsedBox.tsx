import React, { ChangeEvent } from 'react'
import { BeautifiedData } from './BeautifiedData'
import { DataBox, ParsedDataWrap, Pre } from './styles'

type Props = {
  name: string
  parsedJson?: any
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

export const ParsedBox = ({ parsedJson }: Props): JSX.Element => {
  return (
    <ParsedDataWrap>
      <DataBox>
        <Pre>
          <BeautifiedData data={parsedJson} />
        </Pre>
      </DataBox>
    </ParsedDataWrap>
  )
}
