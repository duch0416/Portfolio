import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import Project from "./components/project"
import { Color } from "../constans/Color"

const Wrapper = styled.section`
  background-color: ${Color.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
`
const query = graphql`
  {
    __typename
    file(name: { eq: "project" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ProjectList = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Project
        title="Pokedex"
        technologies={[
          "HTML",
          "CSS",
          "styled-components",
          "Js",
          "Typescript",
          "React",
        ]}
        fluid={data.file.childImageSharp.fluid}
      />
    </Wrapper>
  )
}

export default ProjectList
