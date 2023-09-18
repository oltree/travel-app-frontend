import { FC } from 'react';
import styles from './PolularPlaces.module.scss';
import { IPlace } from '@/shared/types/place';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { urlForImage } from '@sanity/lib/image';

interface PopularPlacesProps {
  places: IPlace[];
  isLoading: boolean;
}

const PopularPlaces: FC<PopularPlacesProps> = ({ places, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular places</h2>

      {isLoading ? (
        <div
          style={{
            marginTop: '-2rem',
          }}
        >
          <Skeleton
            count={1}
            height={200}
            borderRadius='20px'
            baseColor='#1b1b1d'
            highlightColor='#2c2c2e'
          />
        </div>
      ) : places.length ? (
        places.map(place => (
          <Link
            key={place._id}
            href={`/place/${place.slug.current}`}
            className={styles.item}
            style={{
              backgroundImage: `url(${urlForImage(place.imagePath).url()})`,
            }}
          >
            <span className={styles.heading}>
              {place.location.city + ', ' + place.location.country}
            </span>
          </Link>
        ))
      ) : (
        <p
          style={{
            marginTop: '-2rem',
            color: '#e8e8e8',
            opacity: '0.6',
            fontStyle: 'italic',
          }}
        >
          Not found!
        </p>
      )}
    </div>
  );
};

export default PopularPlaces;
