import '@/assets/styles/globals.scss';
import { Layout } from '@/components/layout';
import type { AppProps } from 'next/app';
import NextProgressBar from 'nextjs-progressbar';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextProgressBar
        color='#eb601e'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
