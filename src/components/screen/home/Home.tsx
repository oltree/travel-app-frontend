import { FC } from 'react';
import styles from './Home.module.scss';
import { IPlace } from '@/types/place';

interface HomeProps {
  places: IPlace[];
}

const Home: FC<HomeProps> = ({ places }) => {
  return (
    <div className={styles.container}>
      {places.map((place) => (
        <p key={place.slug}>{place.description}</p>
      ))}
    </div>
  );
};

export default Home;
