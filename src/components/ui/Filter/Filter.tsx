import { FC, useState } from 'react';
import styles from './Filter.module.scss';
import { countries } from './Filter.constants';
import cn from 'classnames';
import { IPlace } from '@/shared/types/place';
import { SetStateType } from '@/shared/types/common';

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
          (place) =>
            place.location.country.toLowerCase() === location.toLowerCase()
        )
      );
      setFilter(location);
    }
  };

  return (
    <div className={styles.wrapper}>
      {countries.map((country) => (
        <button
          key={country.location}
          className={cn({
            [styles.active]: country.location === filter,
          })}
          onClick={() => handleFilter(country.location)}
        >
          {country.location}
        </button>
      ))}
    </div>
  );
};

export default Filter;
