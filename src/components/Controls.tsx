import React from 'react'
import { ControlsWrap } from './styles'

type Props = {
  onParseClick: () => void
  onClearClick: () => void
  onCopyToClipboardClick: () => void
  displayCopyButton?: boolean
}

export const Controls = ({
  onParseClick,
  onClearClick,
  onCopyToClipboardClick,
  displayCopyButton = false,
}: Props): JSX.Element => {
  return (
    <ControlsWrap>
      <button onClick={onParseClick}>parse</button>
      <button onClick={onClearClick}>clear</button>
      {displayCopyButton && <button onClick={onCopyToClipboardClick}>copy to clipboard</button>}
    </ControlsWrap>
  )
}
