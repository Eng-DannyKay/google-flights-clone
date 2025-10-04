import type {
  Flight,
  Location,
  FlightSearchResponse,
  FlightItinerary,
} from "../types/flights";

export const mockLocations: Location[] = [
  {
    entityId: "jfk-entity",
    code: "JFK",
    city: "New York",
    name: "John F. Kennedy International Airport",
    country: "United States",
  },
  {
    entityId: "lax-entity",
    code: "LAX",
    city: "Los Angeles",
    name: "Los Angeles International Airport",
    country: "United States",
  },
  {
    entityId: "ord-entity",
    code: "ORD",
    city: "Chicago",
    name: "O'Hare International Airport",
    country: "United States",
  },
];

export const mockFlights: Flight[] = [
  {
    id: "1",
    airline: "American Airlines",
    flightNumber: "AA123",
    from: "JFK",
    to: "LAX",
    departTime: "08:00",
    arrivalTime: "11:30",
    price: 299.99,
  },
  {
    id: "2",
    airline: "Delta",
    flightNumber: "DL456",
    from: "JFK",
    to: "LAX",
    departTime: "14:15",
    arrivalTime: "17:45",
    price: 349.99,
  },
  {
    id: "3",
    airline: "United",
    flightNumber: "UA789",
    from: "JFK",
    to: "LAX",
    departTime: "19:30",
    arrivalTime: "23:00",
    price: 279.99,
  },
];

export const mockItineraries: FlightItinerary[] = [
  {
    id: "1",
    airline: "American Airlines",
    flightNumber: "AA123",
    from: "JFK",
    to: "LAX",
    departTime: "08:00",
    arrivalTime: "11:30",
    price: 299.99,
  },
  {
    id: "2",
    airline: "Delta",
    flightNumber: "DL456",
    from: "JFK",
    to: "LAX",
    departTime: "14:15",
    arrivalTime: "17:45",
    price: 349.99,
  },
];

export const mockFlightSearchResponse: FlightSearchResponse = {
  context: {
    status: "success",
    sessionId: "test-session-123",
    totalResults: 2,
  },
  itineraries: mockItineraries,
  messages: [],
  filterStats: {
    duration: {
      min: 330,
      max: 330,
      multiCityMin: 330,
      multiCityMax: 330,
    },
    airports: ["JFK", "LAX"],
    carriers: ["American Airlines", "Delta"],
    stopPrices: {
      direct: { isPresent: true },
      one: { isPresent: true },
      twoOrMore: { isPresent: false },
    },
    alliances: [],
  },
  flightsSessionId: "flights-session-123",
  destinationImageUrl: "https://example.com/image.jpg",
};
