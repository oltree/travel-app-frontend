import { FC } from 'react';
import styles from './Place.module.scss';
import { IPlace } from '@/shared/types/place';
import { Button } from './button';
import { Information } from './information';
import { Header } from './header';
import { urlForImage } from '@sanity/lib/image';

interface PlaceProps {
  place: IPlace;
}

const Place: FC<PlaceProps> = ({ place }) => {
  return (
    <div
      style={{ backgroundImage: `url(${urlForImage(place.imagePath).url()})` }}
      className={styles.wrapper}
    >
      <Header />
      <Information place={place} />
      <Button />
    </div>
  );
};

export default Place;
