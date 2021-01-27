import React from 'react'
import { ControlButton, ControlsWrap } from './styles'

type Props = {
  onParseClick: () => void
  onClearClick: () => void
  onCopyToClipboardClick: () => void
  displayCopyButton?: boolean
}

/**
 * Wrapper of control buttons used for parsing JSON input, clearing input/output areas
 * and copying parsed output to clipboard.
 * @param onParseClick
 * @param onClearClick
 * @param onCopyToClipboardClick
 * @param displayCopyButton
 */
export const Controls = ({
  onParseClick,
  onClearClick,
  onCopyToClipboardClick,
  displayCopyButton = false,
}: Props): JSX.Element => {
  return (
    <ControlsWrap>
      <ControlButton onClick={onParseClick}>parse</ControlButton>
      <ControlButton onClick={onClearClick}>clear</ControlButton>
      {displayCopyButton && <ControlButton onClick={onCopyToClipboardClick}>copy to clipboard</ControlButton>}
    </ControlsWrap>
  )
}
