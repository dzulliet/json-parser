import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  justify-content: flex-start;
  min-width: 100px;
`

export const Controls = (): JSX.Element => {
  return (
    <Wrap>
      <button>parse</button>
    </Wrap>
  )
}
