import React from 'react'
import styled from 'styled-components'

type Props = {
  onParseClick: () => void
  onClearClick: () => void
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  justify-content: flex-start;
  min-width: 100px;
`

export const Controls = ({ onParseClick, onClearClick }: Props): JSX.Element => {
  return (
    <Wrap>
      <button onClick={onParseClick}>parse</button>
      <button onClick={onClearClick}>clear</button>
    </Wrap>
  )
}
