import { FC, useState } from 'react';
import uniqby from 'lodash.uniqby';
import cn from 'classnames';

import { IPlace } from '@/shared/types/place';
import { SetStateType } from '@/shared/types/common';

import styles from './Filter.module.scss';

interface FilterProps {
  initialPlaces: IPlace[];
  setPlaces: SetStateType<IPlace[]>;
}

const Filter: FC<FilterProps> = ({ initialPlaces, setPlaces }) => {
  const [filter, setFilter] = useState('');

  const handleFilter = (location: string) => {
    if (filter === location) {
      setPlaces(initialPlaces);
      setFilter('');
    } else {
      setPlaces(
        initialPlaces.filter(
          place =>
            place.location.country.toLowerCase() === location.toLowerCase()
        )
      );
      setFilter(location);
    }
  };

  return (
    <div className={styles.wrapper}>
      {uniqby(initialPlaces, 'location.country').map(place => {
        const country = place.location.country;

        return (
          <button
            key={place._id}
            className={cn({
              [styles.active]: country === filter,
            })}
            onClick={() => handleFilter(country)}
          >
            {country}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
