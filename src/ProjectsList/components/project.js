import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Color } from "../../constans/Color"

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  color: ${Color.purple};
  font-size: 23px;
  letter-spacing: 1.2px;
`
const ProjectImg = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    transition: 0.2s ease;
    &:hover {
        filter: brightness(20%)
    }
`
const ImgContainer = styled.div`
    width: 280px;
    height: 270px;
    box-shadow: 0px 4px 12px 0px ${Color.blue + "51"};
    border-radius: 15px;
    transition: 0.2s ease;
    margin-top: 15px;
    margin-bottom: 15px;
    &:hover {
        cursor: pointer;
        /* box-shadow: 0px 4px 20px 0px ${Color.blue + "51"}; */
    }
`
const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Technologytxt = styled.p`
  color: ${Color.blue};
  margin-right: 5px;
  margin-left: 5px;
  font-size: 18px;
  margin-top: 5px;
`
const Txt = styled.h4`
  color: ${Color.purple};
  font-size: 20px;
  text-align: center;
  width: 100%;
`

const Project = ({ title, technologies, fluid }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ImgContainer>
        <ProjectImg fluid={fluid}/>
      </ImgContainer>
      <Technologies>
        <Txt>Technologies</Txt>
        {technologies.map(technology => (
          <Technologytxt key={technology}>{technology}</Technologytxt>
        ))}
      </Technologies>
    </Wrapper>
  )
}

export default Project
