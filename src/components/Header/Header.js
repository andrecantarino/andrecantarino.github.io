import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 7vh;
  border: 1px solid red;

  h1 {
    color: red;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Andre Cantarino</h1>
    </StyledHeader>
  )
}
