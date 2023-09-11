export type LocationType = {
  city: string;
  country: string;
};

export interface IPlace {
  _id: string;
  slug: string;
  description: string;
  imagePath: string;
  location: LocationType;
  rating: number;
  duration: string;
  distance: number;
}

export interface IFavoritePlace {
  slug: string;
  name: string;
}
