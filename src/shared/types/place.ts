type LocationType = {
  city: string;
  country: string;
};

export interface IPlace {
  slug: string;
  description: string;
  imagePath: string;
  location: LocationType;
  rating: number;
  duration: string;
  distance: number;
  googleMapLink: string;
  mapImage: string;
}

export interface IFavoritePlace {
  slug: string;
  name: string;
}
