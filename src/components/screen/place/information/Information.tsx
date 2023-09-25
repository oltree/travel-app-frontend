import { FC } from 'react';
import { toPlainText } from '@portabletext/react';
import { IPlace } from '@/shared/types/place';

import Map from './Map';

import styles from './Information.module.scss';

interface InformationProps {
  place: IPlace;
}

const Information: FC<InformationProps> = ({ place }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <span className='material-icons'>location_on</span>
        <h1>{place.location.city + ', ' + place.location.country}</h1>
      </div>

      <p>{toPlainText(place.description)}</p>

      <div className={styles.additional}>
        <div className={styles.rating}>
          <span style={{ color: '#fdae32' }} className='material-icons'>
            star
          </span>
          <span>{place.rating}/10</span>
        </div>

        <div className={styles.duration}>
          <span style={{ color: '#565658' }} className='material-icons'>
            calendar_today
          </span>
          <span>{place.duration}</span>
        </div>
      </div>

      <Map location={place.location} />
    </div>
  );
};

export default Information;
