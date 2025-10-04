import { screen } from '@testing-library/react'
import { render } from '../../test/test-utils'
import FlightsTable from './FlightsTable'
import { mockFlights } from '../../test/mocks'


jest.mock('../../hooks/useTablePreferences', () => ({
  useTablePreferences: jest.fn(() => ({
    preferences: { pageSize: 10, visibleColumns: {} },
    savePreferences: jest.fn(),
  })),
}))


jest.mock('@mui/x-data-grid', () => ({
  DataGrid: ({ rows, slots }: { 
    rows: Array<{ id: string; [key: string]: unknown }>
    slots?: { noRowsOverlay?: React.ComponentType }
  }) => (
    <div data-testid="data-grid">

      {rows.map((row) => (
        <div key={row.id} data-testid={`flight-row-${row.id}`}>
          <span data-testid="airline">{String(row.airline)}</span>
          <span data-testid="flight-number">{String(row.flightNumber)}</span>
          <span data-testid="price">{String(row.price)}</span>
        </div>
      ))}
      
      {rows.length === 0 && slots?.noRowsOverlay && (
        <div data-testid="no-flights-overlay">
          <slots.noRowsOverlay />
        </div>
      )}
    </div>
  ),
}))

describe('FlightsTable', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders flight data', () => {
    render(<FlightsTable flights={mockFlights} />)

    expect(screen.getByTestId('flight-row-1')).toBeInTheDocument()
    expect(screen.getByText('American Airlines')).toBeInTheDocument()
    expect(screen.getByText('AA123')).toBeInTheDocument()
    expect(screen.getByText('299.99')).toBeInTheDocument()
  })

  it('shows no flights overlay for empty data', () => {
    render(<FlightsTable flights={[]} />)

    expect(screen.getByTestId('no-flights-overlay')).toBeInTheDocument()
  })
})