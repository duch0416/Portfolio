import React from "react"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'VT323', monospace;
  }
`
const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  font-size: 40px;
  /* background-color: red; */
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Wrapper>DSA  sdas </Wrapper>
  </>
)

export default IndexPage
