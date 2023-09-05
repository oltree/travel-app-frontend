import { FC } from 'react';
import styles from './PolularPlaces.module.scss';
import { IPlace } from '@/shared/types/place';
import Link from 'next/link';

interface PopularPlacesProps {
  places: IPlace[];
}

const PopularPlaces: FC<PopularPlacesProps> = ({ places }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular places</h2>

      {places.map((place) => (
        <Link
          key={place.slug}
          href={`/place/${place.slug}`}
          className={styles.item}
          style={{ backgroundImage: `url(${place.imagePath})` }}
        >
          <span className={styles.heading}>
            {place.location.city + ', ' + place.location.country}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PopularPlaces;
