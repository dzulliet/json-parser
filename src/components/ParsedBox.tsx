import React, { ChangeEvent, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  name: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

const Wrap = styled.div`
  padding: 1rem;
  flex: 3;
  min-width: 200px;
  min-height: 200px;
`

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  background-color: white;
`

export const ParsedBox = ({ name, value, onChange, className }: Props): JSX.Element => {
  return (
    <Wrap>
      <StyledDiv>{value}</StyledDiv>
    </Wrap>
  )
}
