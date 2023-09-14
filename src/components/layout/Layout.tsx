import { FC, PropsWithChildren } from 'react';
import { Footer } from './footer';
import styles from './Layout.module.scss';
import { useRouter } from 'next/router';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
