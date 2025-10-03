// src/services/flightService.ts

import apiClient from './apiClient';

export interface FlightSearchParams {
  origin: string;
  destination: string;
  departDate: string;   
  returnDate?: string;  
  adults?: number;
}
export interface FlightData {
  id: string;
  airline: string;
  origin: string;
  destination: string;
  departTime: string;   
  arrivalTime: string;
  price: number;
  stops: number;
}

export interface FlightSearchResponse {
  result: FlightData[];
  total: number;
  page: number;
  pageSize: number;
}

export const searchFlights = async (
  params: FlightSearchParams
): Promise<FlightSearchResponse> => {
  const { origin, destination, departDate, returnDate, adults = 1 } = params;

  const response = await apiClient.get('/flights/search', {
    params: {
      origin,
      destination,
      departDate,
      returnDate,
      adults,
    },
  });

  return response.data as FlightSearchResponse;
};
