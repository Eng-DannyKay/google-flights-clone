import { useQuery } from '@tanstack/react-query';
import {
  searchFlights,
} from '../services/flightService';
import type { FlightSearchResponse ,FlightSearchParams} from '../services/flightService';

interface UseFlightsOptions {
  enabled?: boolean;
  page?: number;
  pageSize?: number;
}

export const useFlights = (
  params: FlightSearchParams,
  options: UseFlightsOptions = {}
) => {
  const { enabled = false, page = 1, pageSize = 10 } = options;

  return useQuery<FlightSearchResponse, Error>({
    queryKey: ['flights', { ...params, page, pageSize }],
    queryFn: () =>
      searchFlights({
        ...params,
      }),
    enabled,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};
