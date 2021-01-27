import styled, { css } from 'styled-components'

export const Page = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem 3rem;
  min-height: 100vh;
  min-width: 300px;
  background-color: #444242;
`

export const ParserWrap = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 2;
  max-height: calc(100vh - 12rem);

  @media (max-width: 900px) {
    flex: 0;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const TextAreaWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 3;
  flex-direction: column;
  min-width: 200px;
  min-height: calc(200px + 1.4rem);
`

export const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 2rem 0 0;
  justify-content: flex-start;
  min-width: 100px;
  & > * {
    margin: 0 1rem 1rem;
  }

  @media (max-width: 900px) {
    flex: 0;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem 0 0;
    & > * {
      width: 10rem;
    }
  }
`

export const ParsedDataWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  min-width: 200px;
  min-height: calc(200px + 1.4rem);
`

export const StyledTextArea = styled.textarea`
  height: calc(100% - 1.3rem);
  min-height: 200px;
  resize: none;
  border-radius: 4px;
  border: none;
  :focus {
    outline: none;
  }
  background-color: #bee0e4;
`

export const DataBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  background-color: #bee0e4;
  overflow: auto;
  padding: 2px;
  border-radius: 4px;
`
export const Pre = styled.pre`
  margin: 0;
`

export const IndentedSpan = styled.span`
  display: block;
  padding-left: 30px;
`
export const BracketButtonSpan = styled.span`
  display: inline-flex;
`

export const CopyTextArea = styled.textarea`
  display: none;
  white-space: nowrap;
`

const info = css`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  border: none;
  border-radius: 4px;
  color: #444242;
  padding: 8px;
  top: -3rem;
  text-align: center;
  font-family: monospace;
  font-weight: bold;
  font-size: 1.2rem;
`

export const Error = styled.div`
  ${info};
  background-color: #f3bdbd;
`

export const Succes = styled.div`
  ${info};
  background-color: #bce2bc;
`

export const CollapsableButton = styled.button`
  width: 16px;
  height: 16px;
  border: 2px #04556b solid;
  border-radius: 4px;
  background-color: transparent;
  color: #04556b;
  transition-duration: 0.2s;
  :focus {
    outline: none;
  }
  :hover {
    color: #bee0e4;
    background-color: #04556b;
  }
  text-decoration: none;
  font-family: monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
`

export const ControlButton = styled.button`
  border: 2px #bee0e4 solid;
  border-radius: 4px;
  background-color: transparent;
  color: #bee0e4;
  transition-duration: 0.2s;
  :focus {
    outline: none;
  }
  :hover {
    color: #444242;
    background-color: #bee0e4;
  }
  text-decoration: none;
  font-family: monospace;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`

export const Label = styled.label`
  color: #bee0e4;
  font-size: 1.3rem;
  font-weight: bolder;
  font-family: monospace;
`

export const PageHeader = styled.label`
  color: #bee0e4;
  font-size: 2.5rem;
  font-weight: bolder;
  font-family: monospace;
  margin-bottom: 4rem;
`
