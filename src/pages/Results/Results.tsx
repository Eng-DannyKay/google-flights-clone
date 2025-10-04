import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Paper, Typography, Card } from "@mui/material";
import { useFlights } from "../../hooks/useFlights";
import type { FlightSearchParams, Flight } from "../../types/flights";
import ErrorAlert from "../../components/ErrorAlert";
import LoadingSpinner from "../../components/LoadingSpinner";
import DateRangeSelector from "../../components/DateRangeSelector";
import FlightsTable from "../../components/FlightsTable/FlightsTable";

const MAX_WIDTH = 1200;

const buildFlightParams = (searchParams: URLSearchParams): FlightSearchParams => ({
  originSkyId: searchParams.get("originSkyId") || "",
  originEntityId: searchParams.get("originEntityId") || "",
  destinationSkyId: searchParams.get("destinationSkyId") || "",
  destinationEntityId: searchParams.get("destinationEntityId") || "",
  date: searchParams.get("date") || "",
  returnDate: searchParams.get("returnDate") || "",
  market: "en-US",
  countryCode: "US",
  currency: "USD",
});

const ResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const params = useMemo(() => buildFlightParams(searchParams), [searchParams]);

  const hasRequiredParams = Boolean(params.originSkyId && params.destinationSkyId && params.date);

  const { data: flights = [], isLoading, isError, error } = useFlights(
    params,
    hasRequiredParams
  );

 
  const flightStats = useMemo(() => {
    if (!Array.isArray(flights) || flights.length === 0) {
      return { totalFlights: 0, lowestPrice: 0, airlineCount: 0, averagePrice: 0 };
    }

    const prices = flights.map((flight: Flight) => flight.price);
    const lowestPrice = Math.min(...prices);
    const averagePrice = prices.reduce((sum: number, price: number) => sum + price, 0) / prices.length;
    const airlineCount = new Set(flights.map((flight: Flight) => flight.airline)).size;

    return {
      totalFlights: flights.length,
      lowestPrice,
      airlineCount,
      averagePrice: Math.round(averagePrice * 100) / 100,
    };
  }, [flights]);

  if (!hasRequiredParams) {
    return <ErrorAlert message="Missing required search parameters. Please go back and perform a new search." />;
  }

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return <ErrorAlert message={error?.message || "Failed to load flights. Please try again."} />;
  }

  return (
    <Paper sx={{ p: 3, borderRadius: 2, maxWidth: MAX_WIDTH, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        Flight Results
      </Typography>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: 2,
        mb: 3
      }}>
        <Card sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6" color="primary">
            {flightStats.totalFlights}
          </Typography>
          <Typography variant="body2">Total Flights</Typography>
        </Card>
        <Card sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6" color="secondary">
            ${flightStats.lowestPrice}
          </Typography>
          <Typography variant="body2">Lowest Price</Typography>
        </Card>
        <Card sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6" color="success.main">
            {flightStats.airlineCount}
          </Typography>
          <Typography variant="body2">Airlines</Typography>
        </Card>
        <Card sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6" color="info.main">
            ${flightStats.averagePrice}
          </Typography>
          <Typography variant="body2">Average Price</Typography>
        </Card>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Found {flightStats.totalFlights} flight{flightStats.totalFlights !== 1 ? "s" : ""}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <DateRangeSelector />
      </Box>

      <FlightsTable flights={flights as Flight[]} />
    </Paper>
  );
};

export default ResultsPage;