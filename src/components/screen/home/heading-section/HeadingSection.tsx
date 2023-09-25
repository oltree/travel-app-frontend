import { FC } from 'react';

import styles from './HeadingSection.module.scss';

import map from '@/assets/images/map.png';

const HeadingSection: FC = () => {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url('${map.src}')` }}
    >
      <div>
        <h1>best places for trip</h1>
      </div>
    </section>
  );
};

export default HeadingSection;
