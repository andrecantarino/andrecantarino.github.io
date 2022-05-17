import React from 'react'
import styled from 'styled-components'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const StyledPage = styled.div`
  display: flex;
  flex-flow: row wrap;

  main {
    display: flex;
    flex-flow: row wrap;
    height: 86vh;
    width: 100%;
    background-color: var(--backgroundPrimary);
  }
`

const Page = ({ children }) => {
  return (
    <StyledPage>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </StyledPage>
  )
}

export default Page