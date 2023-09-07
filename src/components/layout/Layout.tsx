import { FC, PropsWithChildren } from 'react';
import { Footer } from './footer';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
