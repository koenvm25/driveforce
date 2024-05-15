export interface Circuit {
  id: string;
  url: string;
  name: string;
  location: Location;
}

interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}
