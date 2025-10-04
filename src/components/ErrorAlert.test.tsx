import { screen } from '@testing-library/react'
import { render } from '../test/test-utils'
import ErrorAlert from './ErrorAlert'

describe('ErrorAlert', () => {
  const mockErrorMessage = 'Something went wrong!'

  it('should render error message', () => {
    render(<ErrorAlert message={mockErrorMessage} />)

    expect(screen.getByText(mockErrorMessage)).toBeInTheDocument()
  })

  it('should render error alert with correct severity', () => {
    render(<ErrorAlert message={mockErrorMessage} />)

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('MuiAlert-standardError')
  })

  it('should render in a paper container', () => {
    const { container } = render(<ErrorAlert message={mockErrorMessage} />)

    const paper = container.querySelector('.MuiPaper-root')
    expect(paper).toBeInTheDocument()
  })

  it('should be accessible', () => {
    render(<ErrorAlert message={mockErrorMessage} />)

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveAttribute('aria-live', 'polite')
  })

  it('should handle long error messages', () => {
    const longMessage = 'This is a very long error message that should still be displayed correctly in the alert component without breaking the layout'
    
    render(<ErrorAlert message={longMessage} />)

    expect(screen.getByText(longMessage)).toBeInTheDocument()
  })

  it('should handle empty error message', () => {
    render(<ErrorAlert message="" />)

    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent('')
  })
})