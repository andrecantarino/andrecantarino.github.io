import React from 'react'
import { render, screen } from '@testing-library/react'
import Page from './Page'

describe('Page | snapshot', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Page />)

    expect(asFragment(<Page />)).toMatchSnapshot()
  })
});

describe('Page | receive content', () => {
  it('should receive content as a children', () => {
    const contentPage = <Page><div><p>Hello World</p></div></Page>;
    const { asFragment } = render(contentPage);

    expect(asFragment(contentPage)).toMatchSnapshot()
  })

  it('should pass content as a children', () => {
    render(<Page><div><p>Hello World</p></div></Page>)

    expect(screen.getByText(/Hello World/)).toBeInTheDocument()
  })
});