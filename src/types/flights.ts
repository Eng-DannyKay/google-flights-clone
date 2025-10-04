
export interface ApiResponse<T> {
  status: boolean;
  timestamp: number;
  data: T;
}

export interface LocationApiResponse {
  presentation: {
    title: string;
    suggestionTitle: string;
    subtitle: string;
  };
  navigation: {
    entityId: string;
    entityType: string;
    localizedName: string;
    relevantFlightParams: {
      skyId: string;
      entityId: string;
      flightPlaceType: string;
      localizedName: string;
    };
    relevantHotelParams: {
      entityId: string;
      entityType: string;
      localizedName: string;
    };
  };
}

export interface LocationSearchParams {
  query: string;        
  locale?: string;     
  market?: string;     
  currency?: string;    
}


export interface Location {
  code: string;
  entityId: string;
  name: string;
  city?: string;
  country?: string;
}


export interface LocationSearchResponse {
  data: LocationApiResponse[];
}

export interface FlightItinerary {
  id?: string | number;
  airline: string;
  flightNumber: string;
  from: string;
  to: string;
  departTime: string;
  arrivalTime: string;
  price: number;
}

export interface Flight {
  id?: string | number;
  airline: string;
  flightNumber: string;
  from: string;
  to: string;
  departTime: string;
  arrivalTime: string;
  price: number;
}

export interface DurationFilter {
  min: number;
  max: number;
  multiCityMin?: number;
  multiCityMax?: number;
}

export interface StopPrice {
  isPresent: boolean;
}


export interface FilterStats {
  duration: DurationFilter;
  airports: string[];
  carriers: string[]; 
  stopPrices: {
    direct: StopPrice;
    one: StopPrice;
    twoOrMore: StopPrice;
  };
  alliances: string[];
}

export interface FlightSearchResponse {
  context: {
    status: string;
    sessionId: string;
    totalResults: number;
  };
  itineraries: FlightItinerary[];
  messages: string[];
  filterStats: FilterStats;
  flightsSessionId: string;
  destinationImageUrl: string;
}

export interface FlightSearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  adults?: number;
  market?: string;
  countryCode?: string;
  currency?: string;
  [key: string]: string | number | undefined; 
}