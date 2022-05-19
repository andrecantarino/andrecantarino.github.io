import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

describe('Home | snapshot', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Home />)

    expect(asFragment(<Home />)).toMatchSnapshot()
  })
});