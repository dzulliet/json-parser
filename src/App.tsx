import React from 'react'
import { Parser } from './components/Parser'
import { Page, PageHeader } from './components/styles'

/**
 * Application for formatting JSON data
 */
const App = (): JSX.Element => {
  return (
    <Page>
      <PageHeader>JSON Formatter</PageHeader>
      <Parser />
    </Page>
  )
}

export default App
