import { getTotalTitle } from '@/configs/seo';
import Head from 'next/head';
import { FC } from 'react';

interface MetaNoIndexProps {
  title?: string;
}

const MetaNoIndex: FC<MetaNoIndexProps> = ({ title = 'Error' }) => (
  <Head>
    <title>{getTotalTitle(title)}</title>
    <meta name='robots' content='noindex, nofollow' />
  </Head>
);

export default MetaNoIndex;
