import { FC, useState } from 'react';
import styles from './Home.module.scss';
import { IPlace } from '@/shared/types/place';
import { Filter } from '@/components/ui/Filter';
import { Search } from '@/components/ui/Search';
import { HeadingSection } from './HeadingSection';
import { PopularPlaces } from './PopularPlaces';

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
        <Filter
          initialPlaces={initialPlaces}
          setPlaces={setPlaces}
        />
        <PopularPlaces
          places={places}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Home;
