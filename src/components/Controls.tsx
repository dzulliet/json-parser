import React from 'react'
import { ControlsWrap } from './styles'

type Props = {
  onParseClick: () => void
  onClearClick: () => void
}

export const Controls = ({ onParseClick, onClearClick }: Props): JSX.Element => {
  return (
    <ControlsWrap>
      <button onClick={onParseClick}>parse</button>
      <button onClick={onClearClick}>clear</button>
    </ControlsWrap>
  )
}
