import { FC } from 'react';
import styles from './Home.module.scss';
import { IPlace } from '@/shared/types/place';
import { Filter } from '@/components/ui/Filter';
import { Search } from '@/components/ui/Search';
import { HeadingSection } from './HeadingSection';
import { PopularPlaces } from './PopularPlaces';

interface HomeProps {
  places: IPlace[];
}

const Home: FC<HomeProps> = ({ places }) => {
  return (
    <div className={styles.container}>
      <HeadingSection />

      <div style={{ width: '80%', margin: '0 auto' }}>
        <Search />
        <Filter />
        <PopularPlaces places={places} />
      </div>
    </div>
  );
};

export default Home;
