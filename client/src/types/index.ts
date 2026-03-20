export type PropertyType = "hotel" | "motel" | "inn" | "resort" | "extended_stay";

export type OwnerType =
  | "individual"
  | "llc"
  | "corporation"
  | "trust"
  | "partnership";

export interface GeoPoint {
  type: "Point";
  coordinates: [number, number]; // [lng, lat]
}

export interface Property {
  id: string;
  name: string;
  propertyType: PropertyType;
  address: string;
  city: string;
  countyFips: string;
  countyName: string;
  stateAbbr: string;
  stateName: string;
  zip: string;
  location: GeoPoint;
  roomsCount?: number;
  yearBuilt?: number;
  ownerIds: string[];
  slug: string;
}

export interface Owner {
  id: string;
  name: string;
  ownerType: OwnerType;
  registrationState?: string;
  registrationNumber?: string;
  registeredAgent?: string;
  formationDate?: string;
  propertyCount: number;
  statesPresent: string[];
  slug: string;
}

export interface StateSummary {
  stateAbbr: string;
  stateName: string;
  slug: string;
  propertyCount: number;
  hotelCount: number;
  motelCount: number;
  ownerCount: number;
  countyCount: number;
}

export interface CountySummary {
  fips: string;
  name: string;
  stateAbbr: string;
  slug: string;
  propertyCount: number;
  hotelCount: number;
  motelCount: number;
  ownerCount: number;
}

export interface MapViewport {
  latitude: number;
  longitude: number;
  zoom: number;
}
