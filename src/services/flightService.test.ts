import { searchFlights } from "./flightService";
import { mockFlightSearchResponse } from "../test/mocks";
import type { FlightSearchParams } from "../types/flights";

// Mock the API client to avoid import.meta issues
jest.mock("./apiClient", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    request: jest.fn(),
  },
}));

import apiClient from "./apiClient";
const mockApiClient = jest.mocked(apiClient);

describe("flightService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("searchFlights", () => {
    const mockParams: FlightSearchParams = {
      originSkyId: "JFK-sky",
      destinationSkyId: "LAX-sky",
      originEntityId: "jfk-entity",
      destinationEntityId: "lax-entity",
      date: "2024-12-01",
      adults: 1,
      market: "en-US",
      countryCode: "US",
      currency: "USD",
    };

    it("should search flights successfully", async () => {
      // Mock successful API response
      mockApiClient.get.mockResolvedValueOnce({
        data: mockFlightSearchResponse,
      });

      const result = await searchFlights(mockParams);

      expect(result).toEqual(mockFlightSearchResponse);
      expect(mockApiClient.get).toHaveBeenCalledWith("/searchFlights", {
        params: {
          originSkyId: "JFK-sky",
          destinationSkyId: "LAX-sky",
          originEntityId: "jfk-entity",
          destinationEntityId: "lax-entity",
          date: "2024-12-01",
          adults: 1,
          market: "en-US",
          countryCode: "US",
          currency: "USD",
        },
      });
    });

    it("should handle API errors", async () => {
      const mockError = new Error("Network error");
      mockApiClient.get.mockRejectedValueOnce(mockError);

      await expect(searchFlights(mockParams)).rejects.toThrow("Network error");
    });

    it("should use default adults value when not provided", async () => {
      const paramsWithoutAdults: FlightSearchParams = {
        originSkyId: "JFK-sky",
        destinationSkyId: "LAX-sky",
        originEntityId: "jfk-entity",
        destinationEntityId: "lax-entity",
        date: "2024-12-01",
      };

      mockApiClient.get.mockResolvedValueOnce({
        data: mockFlightSearchResponse,
      });

      await searchFlights(paramsWithoutAdults);

      expect(mockApiClient.get).toHaveBeenCalledWith("/searchFlights", {
        params: expect.objectContaining({
          adults: 1, // Default value
        }),
      });
    });

    it("should include default parameters in request", async () => {
      mockApiClient.get.mockResolvedValueOnce({
        data: mockFlightSearchResponse,
      });

      await searchFlights(mockParams);

      expect(mockApiClient.get).toHaveBeenCalledWith("/searchFlights", {
        params: expect.objectContaining({
          market: "en-US",
          countryCode: "US",
          currency: "USD",
        }),
      });
    });

    it("should handle return date parameter", async () => {
      const paramsWithReturn = {
        ...mockParams,
        returnDate: "2024-12-15",
      };

      mockApiClient.get.mockResolvedValueOnce({
        data: mockFlightSearchResponse,
      });

      await searchFlights(paramsWithReturn);

      expect(mockApiClient.get).toHaveBeenCalledWith("/searchFlights", {
        params: expect.objectContaining({
          returnDate: "2024-12-15",
        }),
      });
    });
  });
});
