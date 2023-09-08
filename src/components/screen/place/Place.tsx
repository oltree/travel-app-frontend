import { FC } from 'react';
import styles from './Place.module.scss';
import { IPlace } from '@/shared/types/place';

interface PlaceProps {
  place: IPlace;
}

const Place: FC<PlaceProps> = ({ place }) => {
  return <div>Place {place.slug}</div>;
};

export default Place;
