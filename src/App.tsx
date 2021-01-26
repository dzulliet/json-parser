import React from 'react'
import { Parser } from './components/Parser'
import styled from 'styled-components'

const Page = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  min-height: 100vh;
  min-width: 300px;
  background-color: lightblue;
`

const App = (): JSX.Element => {
  return (
    <Page>
      <Parser />
    </Page>
  )
}

export default App
