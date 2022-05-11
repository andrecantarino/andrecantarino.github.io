import React from 'react'
import styled from 'styled-components'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const StyledPage = styled.div`
  border: 1px solid red;
  display: flex;
  flex-flow: row wrap;

  main {
    display: flex;
    flex-flow: row wrap;
    height: 86vh;
    width: 100%;
  }
`

const Page = ({ children }) => {
  return (
    <StyledPage className='page'>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </StyledPage>
  )
}

export default Page