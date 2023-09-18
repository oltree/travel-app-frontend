import type { Image } from 'sanity';

export type LocationType = {
  city: string;
  country: string;
};

export type SlugType = {
  current: string;
};

export interface IPlace {
  _id: string;
  slug: SlugType;
  description: string;
  imagePath: Image;
  location: LocationType;
  rating: number;
  duration: string;
  distance: number;
}

export interface IFavoritePlace {
  slug: string;
  name: string;
}
