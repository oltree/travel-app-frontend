import { FC, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { faroritesPlaces } from './Header.constants';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Link
        href='/'
        className={styles.buttonWrapper}
      >
        <span
          style={{ color: '#e8e8e8' }}
          className='material-icons'
        >
          arrow_back_ios_new
        </span>
      </Link>

      <div className={styles.bookmark}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.buttonWrapper}
        >
          <span
            style={{ color: '#e8e8e8' }}
            className='material-icons'
          >
            favorite
          </span>
        </button>
        {isOpen && (
          <ul>
            {faroritesPlaces.map((place, index) => (
              <li key={index}>
                <Link href={`/place/${place.slug}`}>{place.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
