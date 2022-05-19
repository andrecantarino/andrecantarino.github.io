import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header | snapshot', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment(<Header />)).toMatchSnapshot()
  })
});