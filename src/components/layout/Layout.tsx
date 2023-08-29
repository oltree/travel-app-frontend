import { FC, PropsWithChildren } from 'react';
import { Footer } from './footer';
import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
