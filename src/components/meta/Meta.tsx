import { getTotalTitle, siteName } from '@/configs/seo';
import { getOnlyText } from '@/shared/utils/getOnlyText';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import MetaNoIndex from './MetaNoIndex';
import { IMeta } from '@/shared/types/meta';
import { PUBLIC_APP_URL } from '@/shared/constants/env';

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  image,
  children,
}) => {
  const { asPath } = useRouter();
  const currentUrl = `${PUBLIC_APP_URL}${asPath}`;

  return (
    <>
      {description ? (
        <Head>
          <title itemProp='headline'>{getTotalTitle(title)}</title>
          <meta
            itemProp='description'
            name='description'
            content={getOnlyText(description, 152)}
          />
          <link rel='canonical' href={currentUrl} />
          <meta property='og:locale' content='en' />
          <meta property='og:title' content={getTotalTitle(title)} />
          <meta property='og:url' content={currentUrl} />
          <meta property='og:image' content={image || '/logo.png'} />
          <meta property='og:site_name' content={siteName} />
          <meta
            property='og:description'
            content={getOnlyText(description, 197)}
          />
        </Head>
      ) : (
        <MetaNoIndex title={title} />
      )}
      {children}
    </>
  );
};

export default Meta;
