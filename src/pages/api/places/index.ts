import { NextApiRequest, NextApiResponse } from 'next';

import { IPlace } from '@/shared/types/place';

export const places: IPlace[] = [
  {
    _id: 'wefwe23wdf',
    slug: 'tokyo',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
    imagePath: 'http://localhost:3000/images/places/japan.jpg',
    location: { country: 'Japan', city: 'Kyoto' },
    rating: 5,
    duration: '10 days',
    distance: 10453,
  },
  {
    _id: 'wefwewef2w32ef23wdf',
    slug: 'venezia',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
    imagePath: 'http://localhost:3000/images/places/italy.jpg',
    location: { country: 'Italy', city: 'Venezia' },
    rating: 5,
    duration: '7 days',
    distance: 9453,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}
