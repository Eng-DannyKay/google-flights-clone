import type { Flight } from "../types/flights";

export const processFlightData = (flights: Flight[]): Flight[] => {
  if (!Array.isArray(flights)) {
    return [];
  }

  return flights.map((flight: Flight, index: number) => ({
    id: flight.id || `flight-${index}`,
    ...flight,
  }));
};