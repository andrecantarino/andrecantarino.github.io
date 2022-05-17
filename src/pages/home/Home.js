import React from 'react'
import styled from 'styled-components'
import profilePhoto from '../../assets/img/andre-cantarino.png'
import githubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import mediumIcon from '../../assets/icons/medium.svg'

const StyledHome = styled.section`
  display: flex;
  width: 100%;

  .content {
    display: flex;
    margin: auto 0;
  }

  .bio {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .role {
    font-size: 2rem;
    color: var(--textPrimary);
    margin: 5rem 2rem 2rem 2rem;
  }

  .description {
    font-size: 1rem;
    color: var(--textSecondary);
    margin: 0 2rem;
  }

  aside {
    display: flex;
    text-align: center;
  }

  .profile {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .avatar {
    height: 300px;
    width: 300px;
    border-radius: 10rem;
    margin: 5rem auto 2rem auto;
  }

  .title {
    font-size: 2rem;
    margin: 1rem 0 0 0;
    color: var(--textPrimary);
  }

  .subtitle {
    font-size: 1rem;
    color: var(--textSecondary);
    font-weight: 300;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0.6rem;
  }

  a {
    width: 30px;
    height: 30px;
  }

  .icon-img {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
    }

    .bio {
      width: 100%;
    }

    aside {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      padding: 2rem 0 8rem 0;
    }
  }

  @media screen and (min-width: 480px) {
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
    }

    .bio {
      width: 100%;
    }

    aside {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      padding: 2rem 0;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
    }

    .bio {
      width: 100%;
    }

    aside {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      padding: 2rem 0;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
    }

    .bio {
      width: 100%;
    }

    aside {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      padding: 2rem 0;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    flex: 1;
    height: 86vh;

    .content {
      width: 70%;
      height: 86vh;
    }

    .bio {
      width: 75%;
    }

    aside {
      flex-direction: column;
      width: 30%;
    }
  }

  @media screen and (min-width: 1201px) {
    .content {
      width: 70%;
      height: 86vh;
    }

    .bio {
      width: 75%;
    }

    aside {
      flex-direction: column;
      width: 30%;
    }
  }
`

export const Home = () => {
  return (
    <StyledHome className='home-page'>
      <div className='content'>
        <div className='bio'>
          <h2 className='role'>Software Engineer</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dolor eleifend, tristique justo at, imperdiet nisi. In ex lorem, dignissim at sodales sed, rhoncus in felis. Phasellus turpis elit, auctor eu dapibus eu, gravida sed libero. Cras nec metus sit amet nibh sodales molestie. Fusce efficitur finibus pulvinar. Proin vel tincidunt augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque consectetur vitae erat vel ultrices. Aliquam sed neque venenatis, ultricies leo vel, luctus orci.</p>
        </div>
      </div>
      <aside>
        <div className='profile'>
          <img
            src={profilePhoto}
            className='avatar'
            alt='andre cantarino profile'
          />
          <h1 className='title'>Andre Cantarino</h1>
          <h2 className='subtitle'>Software Engineer who loves frontend</h2>
          <ul>
            <li>
              <a href='https://github.com/andrecantarino' alt='github icon'>
                <img src={githubIcon} alt='github icon' className='icon-img' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/andre-cantarino/' alt='linkedin icon'>
                <img src={linkedinIcon} alt='linkedin icon' className='icon-img' />
              </a>
            </li>
            <li>
              <a href='https://andrecantarino.medium.com/' alt='medium icon'>
                <img src={mediumIcon} alt='medium icon' className='icon-img' />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </StyledHome>
  )
}
