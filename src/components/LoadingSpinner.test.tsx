import { screen } from '@testing-library/react'
import { render } from '../test/test-utils'
import LoadingSpinner from './LoadingSpinner'

describe('LoadingSpinner', () => {
  it('should render loading spinner', () => {
    render(<LoadingSpinner />)

    // Check if the loading spinner is present
    const spinner = screen.getByRole('progressbar')
    expect(spinner).toBeInTheDocument()
  })

  it('should render in a paper container', () => {
    const { container } = render(<LoadingSpinner />)

    // Check if the paper element exists
    const paper = container.querySelector('.MuiPaper-root')
    expect(paper).toBeInTheDocument()
  })

  it('should have proper structure', () => {
    const { container } = render(<LoadingSpinner />)

    // Check if the Box container exists
    const box = container.querySelector('.MuiBox-root')
    expect(box).toBeInTheDocument()
  })

  it('should have circular progress indicator', () => {
    render(<LoadingSpinner />)

    const spinner = screen.getByRole('progressbar')
    expect(spinner).toHaveClass('MuiCircularProgress-root')
  })
})