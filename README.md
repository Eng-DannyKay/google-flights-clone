# Google Flights Clone

A modern flight search application built with React, TypeScript, and Material-UI that replicates core Google Flights functionality.

## 🚀 Features

- **Flight Search**: Comprehensive search form with autocomplete location selection and date pickers
- **Real-time Results**: Integration with Sky-Scrapper API for live flight data
- **Interactive Table**: Advanced data grid with sorting, pagination, and filtering
- **User Preferences**: Persistent table preferences (column visibility, page size)
- **Responsive Design**: Mobile-first design with adaptive layouts
- **Accessibility**: WCAG compliant components with proper ARIA attributes
- **Comprehensive Testing**: Full test suite with Jest and React Testing Library

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **UI Framework**: Material-UI (MUI) v7 with custom theming
- **State Management**: TanStack React Query v5 for server state
- **HTTP Client**: Axios with interceptors
- **Date Handling**: Day.js with MUI Date Pickers
- **Routing**: React Router v7
- **Testing**: Jest + React Testing Library + ts-jest
- **Code Quality**: ESLint + TypeScript + Prettier

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd google-flights-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   # Create .env file from example
   cp .env.example .env
   
   # Add your RapidAPI key
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🧪 Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── FlightSearchForm/
│   ├── FlightsTable/
│   ├── Layout/
│   └── ...
├── hooks/              # Custom React hooks
├── pages/              # Route components
├── services/           # API services and HTTP client
├── test/               # Testing utilities and mocks
├── types/              # TypeScript type definitions
└── utils/              # Helper functions and constants
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## 🌟 Key Components

### FlightSearchForm
- Autocomplete location search with debouncing
- Date range selection with validation
- Responsive form layout

### FlightsTable
- Sortable columns with custom sort logic
- Pagination with configurable page sizes
- Column visibility controls
- Persistent user preferences

### Custom Hooks
- `useDebounce` - Debounced value updates
- `useFlights` - Flight search with React Query
- `useLocations` - Location autocomplete
- `useTablePreferences` - Persistent table settings

## 🔌 API Integration

The application integrates with the Sky-Scrapper API via RapidAPI for:
- Airport/location search
- Flight availability and pricing
- Real-time flight data

## 🎨 Design System

Built with Material-UI featuring:
- Custom color palette and typography
- Responsive breakpoints
- Consistent spacing and elevation
- Dark/light theme support

## 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts for tablet and desktop
- Touch-friendly interactions
- Optimized performance across devices

## 🧭 Roadmap

- [ ] Flight booking simulation
- [ ] Price alerts and notifications
- [ ] Advanced filtering options
- [ ] Multi-city trip planning
- [ ] User authentication
- [ ] Trip history and favorites

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

