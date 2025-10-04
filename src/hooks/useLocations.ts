import { useQuery } from "@tanstack/react-query";

import type { LocationSearchParams, Location } from "../types/flights";
import { searchLocations } from "../services/locationService";
import { QueryKeys } from "../utils/enums";

export const useLocations = (params: LocationSearchParams, enabled = true) => {
  return useQuery<Location[], Error>({
    queryKey: [QueryKeys.LOCATIONS, params.query],
    queryFn: () => searchLocations(params),
    enabled: enabled && !!params.query,
    staleTime: 1000 * 60 * 5, 
  });
};
