import React from "react"
import { createGlobalStyle } from "styled-components"

import HeroSection from "../heroSection/heroSection"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'VT323', monospace;
  }
`


const IndexPage = () => (
  <>
    <GlobalStyle />
    <HeroSection/>
  </>
)



export default IndexPage
