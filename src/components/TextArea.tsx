import React, { ChangeEvent } from 'react'
import { StyledTextArea, TextAreaWrap, Label } from './styles'

type Props = {
  name: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
/**
 * Component accepting user input
 * @param name - name of element
 * @param value - displayed value
 * @param onChange - ChangeEvent function
 */
export const TextArea = ({ name, value, onChange }: Props): JSX.Element => {
  return (
    <TextAreaWrap>
      <Label>JSON data</Label>
      <StyledTextArea name={name} value={value} onChange={onChange} />
    </TextAreaWrap>
  )
}
