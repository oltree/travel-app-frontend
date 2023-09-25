import { FC } from 'react';
import { useRouter } from 'next/router';

import styles from './Footer.module.scss';

import { routes } from './footer.constants';

const Footer: FC = () => {
  const { push, pathname } = useRouter();

  return (
    <footer className={styles.footer}>
      <nav>
        {routes.map(item => (
          <button
            key={item.icon}
            className={pathname === item.link ? styles.active : ''}
            onClick={() => push(item.link)}
          >
            <span className='material-icons'>{item.icon}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
