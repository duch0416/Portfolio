import React from 'react';
import styled from "styled-components"
import {useStaticQuery, graphql} from "gatsby"

const query = graphql`{
    __typename
    file(name: { eq: "arrow" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          src
        }
      }
    }
}`;

const ArrowImg = styled.img`
    position: absolute;
    bottom: 15%;
    right: 50%;
    transform: translateX(50%);
    transition: 0.2s ease;
    &:hover{
        transform: translateX(50%) scale(1.2);
        cursor: pointer;
    }
`

const Arrow = () => {
    const data = useStaticQuery(query)
    return (<ArrowImg src={data.file.childImageSharp.fluid.src}/>  );
}
 
export default Arrow;