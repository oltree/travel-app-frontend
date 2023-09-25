import { ChangeEvent, FC, useState } from 'react';

import { IPlace } from '@/shared/types/place';
import { SetStateType } from '@/shared/types/common';

import styles from './Search.module.scss';

interface SearchProps {
  initialPlaces: IPlace[];
  setPlaces: SetStateType<IPlace[]>;
  setIsLoading: SetStateType<boolean>;
}

const Search: FC<SearchProps> = ({
  initialPlaces,
  setPlaces,
  setIsLoading,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);

    const value = e.target.value;
    setSearchTerm(value);

    setTimeout(() => {
      if (value) {
        setPlaces(
          initialPlaces.filter(
            place =>
              place.location.city.toLowerCase().includes(value) ||
              place.location.country.toLowerCase().includes(value)
          )
        );
      } else {
        setPlaces(initialPlaces);
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.search}>
      <span className='material-icons-outlined'>search</span>
      <input
        type='text'
        name='search'
        value={searchTerm}
        placeholder='Search place...'
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
