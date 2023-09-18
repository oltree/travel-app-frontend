import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { client } from './client';

const imageBuilder = imageUrlBuilder(client);

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source);
};
