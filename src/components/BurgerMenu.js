import React from "react"
import styled from "styled-components"

const Burger = styled.button`
  position: fixed;
  top: 2%;
  right: 4%;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
`
const BurgerBox = styled.span`
  width: 40px;
  height: 26px;
  display: inline-block;
  position: relative;
`

const BurgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: #0AC8FA;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;
  border-radius: 30px;

  &::before,
  ::after {
    border-radius: 30px;
    width: 100%;
    height: 3px;
    background-color: #0AC8FA;
    position: absolute;
    content: "";
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
  }
  &::before {
    top: -12px;
  }
  &::after {
    top: 12px;
  }
`

const BurgerMenu = () => {
  return (
    <Burger>
      <BurgerBox>
        <BurgerInner></BurgerInner>
      </BurgerBox>
    </Burger>
  )
}

export default BurgerMenu
