import React from 'react'
import styled from 'styled-components'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const StyledPage = styled.div`
  display: flex;
  flex-flow: row wrap;

  main {
    display: flex;
  }

  @media screen and (max-width: 480px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 480px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 768px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1024px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 1200px) {
    main {
      flex-flow: row wrap;
      width: 100%;
    }
  }

  @media screen and (min-width: 1201px) {
    main {
      flex-flow: row wrap;
      width: 100%;
    }
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