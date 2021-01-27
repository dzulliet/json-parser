import styled from 'styled-components'

export const ParserWrap = styled.div`
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
`

export const DataBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  background-color: white;
  overflow: auto;
  max-height: calc(100vh - 8rem);
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
