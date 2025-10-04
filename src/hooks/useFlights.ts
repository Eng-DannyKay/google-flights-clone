import { useQuery } from "@tanstack/react-query";
import { searchFlights } from "../services/flightService";
import type { FlightSearchParams, FlightSearchResponse } from "../types/flights";
import { QueryKeys } from "../utils/enums";

export const useFlights = (params: FlightSearchParams, enabled = false) =>
  useQuery<FlightSearchResponse>({
    queryKey: [QueryKeys.FLIGHTS, params],
    queryFn: () => searchFlights(params),
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
