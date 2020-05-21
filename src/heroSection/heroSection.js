import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Title from "../heroSection/components/Title"
import BurgerMenu from "../heroSection/components/BurgerMenu"
import Arrow from "../heroSection/components/Arrow"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Hero = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const query = graphql`{
    __typename
    file(name: { eq: "jl" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`

const HeroSection = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Hero fluid={data.file.childImageSharp.fluid} />
      <BurgerMenu />
      <Title />
      <Arrow />
    </Wrapper>
  )
}

export default HeroSection
