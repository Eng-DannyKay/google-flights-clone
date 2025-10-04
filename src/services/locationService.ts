import apiClient from "./apiClient";
import type {
  LocationSearchParams,
  LocationSearchResponse,
  LocationApiResponse,
  Location,
} from "../types/flights";
import { defaultParams } from "../utils/constants";

const mapApiToLocation = (api: LocationApiResponse): Location => ({
  code: api.navigation.relevantFlightParams.skyId,
  entityId: api.navigation.relevantFlightParams.entityId,
  name: api.presentation?.title ,
  city: api.navigation.localizedName,
  country: api.presentation?.subtitle,
});



export const searchLocations = async (
  params: LocationSearchParams
): Promise<Location[]> => {
  const { query, ...rest } = params;

  const { data } = await apiClient.get<LocationSearchResponse>(
    "/searchAirport",
    {
      params: {
        query,
        ...defaultParams,
        ...rest,
      },
    }
  );

  return data?.data?.map(mapApiToLocation) ?? [];
};
