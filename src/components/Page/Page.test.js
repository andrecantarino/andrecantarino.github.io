import React from 'react'
import { render } from '@testing-library/react'
import Page from './Page'

describe('Page | snapshot', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Page />)

    expect(asFragment(<Page />)).toMatchSnapshot()
  })
});