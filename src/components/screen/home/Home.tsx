import { FC, useState } from 'react';

import { IPlace } from '@/shared/types/place';
import { Filter } from '@/components/ui/filter';
import { Search } from '@/components/ui/search';

import { HeadingSection } from './heading-section';
import { PopularPlaces } from './popular-places';

import styles from './Home.module.scss';

interface HomeProps {
  initialPlaces: IPlace[];
}

const Home: FC<HomeProps> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <HeadingSection />

      <div style={{ width: '80%', margin: '0 auto' }}>
        <Search
          initialPlaces={initialPlaces}
          setPlaces={setPlaces}
          setIsLoading={setIsLoading}
        />
        <Filter initialPlaces={initialPlaces} setPlaces={setPlaces} />
        <PopularPlaces places={places} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
