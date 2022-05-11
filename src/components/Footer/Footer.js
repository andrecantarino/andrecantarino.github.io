import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7vh;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  )
}
