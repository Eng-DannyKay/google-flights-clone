import apiClient from "./apiClient";
import type { FlightSearchParams, FlightSearchResponse } from "../types/flights";
import { defaultParams } from "../utils/constants";

export const searchFlights = async (
  params: FlightSearchParams
): Promise<FlightSearchResponse> => {
  const {
    originSkyId,
    destinationSkyId,
    originEntityId,
    destinationEntityId,
    date,
    adults = 1,
    ...rest
  } = params;

  const { data } = await apiClient.get<FlightSearchResponse>(
    "/searchFlights",
    {
      params: {
        originSkyId,
        destinationSkyId,
        originEntityId,
        destinationEntityId,
        date,
        adults,
        ...defaultParams,
        ...rest,
      },
    }
  );

  return data;
};
