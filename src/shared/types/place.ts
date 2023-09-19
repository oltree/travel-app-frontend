import type { Image } from 'sanity';
import type { ArbitraryTypedObject } from '@portabletext/types';

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
  description: ArbitraryTypedObject[];
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
