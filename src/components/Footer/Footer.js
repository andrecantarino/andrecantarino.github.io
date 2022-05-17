import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7vh;
  /* background-color: var(--backgroundPrimary); */

  @media screen and (max-width: 480px) {
    background-color: yellow;
  }

  @media screen and (min-width: 480px) {
    background-color: purple;
  }

  @media screen and (min-width: 768px) {
    background-color: red;
  }

  @media screen and (min-width: 1024px) {
    background-color: blue;
  }

  @media screen and (min-width: 1200px) {
    background-color: green;
  }

  @media screen and (min-width: 1201px) {
    background-color: white;
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
    </StyledFooter>
  )
}
