import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

const TextAreaWrap = styled.div`
  padding: 1rem;
  display: flex;
  flex: 3;
  flex-direction: row;
  min-width: 200px;
  min-height: 200px;
`

const StyledTextArea = styled.textarea`
  width: 100%;
`

export const TextArea = ({ name, value, onChange, className }: Props): JSX.Element => {
  return (
    <TextAreaWrap>
      <StyledTextArea name={name} value={value} onChange={onChange} className={className} />
    </TextAreaWrap>
  )
}
