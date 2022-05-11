import React from 'react'
import styled from 'styled-components'

const StyledHome = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  .description {
    flex: 1;
    height: 86vh;
  }

  aside {
    width: 30%;
    height: 86vh;
    min-height: 100%;
  }
`

export const Home = () => {
  return (
    <StyledHome>
      <div className='description'>
        <p>description</p>
      </div>
      <aside>Aside</aside>
    </StyledHome>
  )
}
