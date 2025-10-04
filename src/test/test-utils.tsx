import type { ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import AllTheProviders from './AllTheProviders'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export {
  render as originalRender,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
  getByRole,
  getByText,
  getByLabelText,
  getByPlaceholderText,
  getByTestId,
  getByDisplayValue,
  getByAltText,
  getByTitle,
  queryByRole,
  queryByText,
  queryByLabelText,
  queryByPlaceholderText,
  queryByTestId,
  queryByDisplayValue,
  queryByAltText,
  queryByTitle,
  findByRole,
  findByText,
  findByLabelText,
  findByPlaceholderText,
  findByTestId,
  findByDisplayValue,
  findByAltText,
  findByTitle,
  act,
  renderHook,
  cleanup,
} from '@testing-library/react'

export { customRender as render }
export { createTestQueryClient } from './test-helpers'