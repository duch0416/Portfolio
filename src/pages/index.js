import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Title from "../components/Title"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'VT323', monospace;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled(Image)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const IndexPage = ({ data }) => (
  
  <>
    <GlobalStyle />
    <Wrapper src={data.file.childImageSharp.fluid.src}>
      <Img fluid={data.file.childImageSharp.fluid} />
      <Title></Title>
    </Wrapper>
  </>
)

export const query = graphql`
  {
    __typename
    file(name: { eq: "jl" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
