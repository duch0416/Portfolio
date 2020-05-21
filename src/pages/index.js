import React from "react"
import { createGlobalStyle } from "styled-components"

import HeroSection from "../heroSection/heroSection"
import ProjectList from "../ProjectsList/projectList"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'VT323', monospace;
  }

`


const IndexPage = () => (
  <>
    <GlobalStyle />
    <HeroSection/>
    <ProjectList/>
  </>
)



export default IndexPage
