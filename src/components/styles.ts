import styled, { css } from 'styled-components'

export const Page = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
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

  @media (max-width: 900px) {
    flex: 0;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const TextAreaWrap = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex: 3;
  flex-direction: row;
  min-width: 200px;
  min-height: 200px;
`

export const ControlsWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  justify-content: flex-start;
  min-width: 100px;
`

export const ParsedDataWrap = styled.div`
  padding: 1rem;
  flex: 3;
  min-width: 200px;
  min-height: 200px;
`

export const StyledTextArea = styled.textarea`
  width: 100%;
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
  max-height: calc(100vh - 8rem);
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
  width: calc(100% - 2rem);
  border-radius: 4px;
  background-color: #f3bdbd;
  color: #ad1a1a;
  padding: 8px;
  top: -24px;
  left: 1rem;
  text-align: center;
`

export const Error = styled.div`
  ${info};
  background-color: #f3bdbd;
  color: #ad1a1a;
`

export const Succes = styled.div`
  ${info};
  background-color: #bce2bc;
  color: green;
`
