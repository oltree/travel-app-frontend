import { FC, useState } from 'react';
import styles from './Filter.module.scss';
import { cities } from './Filter.constants';
import cn from 'classnames';

const Filter: FC = () => {
  const [filter, setFilter] = useState('');

  return (
    <div className={styles.wrapper}>
      {cities.map((city) => (
        <button
          key={city.location}
          className={cn({
            [styles.active]: city.location === filter,
          })}
          onClick={() => setFilter(city.location)}
        >
          {city.location}
        </button>
      ))}
    </div>
  );
};

export default Filter;
