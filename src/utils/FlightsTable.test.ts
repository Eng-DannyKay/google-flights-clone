import { processFlightData } from "./FlightsTable";
import { formatCurrency } from "./constants";
import { mockFlights } from "../test/mocks";
import type { Flight } from "../types/flights";

describe("FlightsTable utils", () => {
  describe("processFlightData", () => {
    it("should process valid flight data correctly", () => {
      const result = processFlightData(mockFlights);

      expect(result).toHaveLength(mockFlights.length);
      expect(result[0]).toHaveProperty("id");
      expect(result[0].id).toBe("1");
    });

    it("should add auto-generated ids for flights without ids", () => {
      const flightsWithoutIds: Flight[] = [
        {
          airline: "Test Airlines",
          flightNumber: "TA123",
          from: "JFK",
          to: "LAX",
          departTime: "08:00",
          arrivalTime: "11:30",
          price: 299.99,
        },
        {
          airline: "Test Airlines 2",
          flightNumber: "TA456",
          from: "LAX",
          to: "JFK",
          departTime: "14:00",
          arrivalTime: "22:30",
          price: 349.99,
        },
      ];

      const result = processFlightData(flightsWithoutIds);

      expect(result[0].id).toBe("flight-0");
      expect(result[1].id).toBe("flight-1");
    });

    it("should handle empty array", () => {
      const result = processFlightData([]);

      expect(result).toEqual([]);
    });

    it("should handle invalid input gracefully", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = processFlightData(null as any);

      expect(result).toEqual([]);
    });

    it("should preserve all flight properties", () => {
      const result = processFlightData(mockFlights);

      expect(result[0]).toEqual(
        expect.objectContaining({
          airline: mockFlights[0].airline,
          flightNumber: mockFlights[0].flightNumber,
          from: mockFlights[0].from,
          to: mockFlights[0].to,
          departTime: mockFlights[0].departTime,
          arrivalTime: mockFlights[0].arrivalTime,
          price: mockFlights[0].price,
        })
      );
    });
  });
});

describe("constants utils", () => {
  describe("formatCurrency", () => {
    it("should format currency correctly", () => {
      expect(formatCurrency(299.99)).toBe("$299.99");
      expect(formatCurrency(1000)).toBe("$1000.00");
      expect(formatCurrency(0)).toBe("$0.00");
    });

    it("should handle decimal values", () => {
      expect(formatCurrency(299.5)).toBe("$299.50");
      expect(formatCurrency(299.999)).toBe("$300.00"); // Rounded
    });

    it("should handle negative values", () => {
      expect(formatCurrency(-100)).toBe("$-100.00");
    });

    it("should handle very large numbers", () => {
      expect(formatCurrency(9999999.99)).toBe("$9999999.99");
    });
  });
});
