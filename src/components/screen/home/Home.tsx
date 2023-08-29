import { FC } from 'react';

import styles from './Home.module.scss';
import { Footer } from '@/components/layout/footer';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Footer />
    </div>
  );
};

export default Home;
