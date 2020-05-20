import React, {useState} from "react"
import styled from "styled-components"

const Burger = styled.button`
  outline: none;
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
  background-color: #0ac8fa;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s ease-in-out;
  border-radius: 30px;
  background-color: ${({active}) => active && "transparent"};

  &::before,
  ::after {
    border-radius: 30px;
    width: 100%;
    height: 3px;
    background-color: #0ac8fa;
    position: absolute;
    content: "";
    left: 0;
    transition: transform 0.2s  ease;
    
  }
  &::before {
    top: -12px;
    transform: ${({active}) => active ? "translateY(12px) rotate(45deg)" : "rotate(0)"};
  }
  &::after {
    transform: ${({active}) => active ? "translateY(-12px) rotate(-45deg)" : "rotate(0)"};
    top: 12px;
  }
`

const BurgerMenu = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

  return (
    <Burger onClick={handleClick}>
      <BurgerBox>
        <BurgerInner active={active}></BurgerInner>
      </BurgerBox>
    </Burger>
  )
}

export default BurgerMenu
