import React, { ChangeEvent } from 'react'
import { StyledTextArea, TextAreaWrap, Label } from './styles'

type Props = {
  name: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
}

export const TextArea = ({ name, value, onChange }: Props): JSX.Element => {
  return (
    <TextAreaWrap>
      <Label>JSON data</Label>
      <StyledTextArea name={name} value={value} onChange={onChange} />
    </TextAreaWrap>
  )
}
