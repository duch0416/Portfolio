import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`
const Name = styled.h1`
    color: #0AC8FA;
    font-size: 36px;
    text-align: center;
    letter-spacing: 2px;
`
const JobTitle = styled.h2`
    color: #0AC8FA;
    font-size: 25px;
    text-align: center;
`

const Title = () => {
    return ( 
        <Wrapper>
        <Name>Mikołaj Duchewicz</Name>
        <JobTitle>FrontEnd Developer</JobTitle>
        </Wrapper>
     );
}
 
export default Title;