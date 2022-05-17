import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7vh;
  background-color: var(--backgroundPrimary);

  h1 {
    color: red;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
    </StyledHeader>
  )
}
