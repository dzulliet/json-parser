import React, { ChangeEvent } from 'react'
import { StyledTextArea, TextAreaWrap } from './styles'

type Props = {
  name: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

export const TextArea = ({ name, value, onChange, className }: Props): JSX.Element => {
  return (
    <TextAreaWrap>
      <StyledTextArea name={name} value={value} onChange={onChange} className={className} />
    </TextAreaWrap>
  )
}
