import { Meta } from '@/components/meta';
import { Home } from '@/components/screen/home';
import { IPlace } from '@/shared/types/place';
import { GetStaticProps, NextPage } from 'next';
import { client } from '../../sanity/lib/client';

const placeQuery = `*[_type == "place"]`;

export interface HomeProps {
  initialPlaces: IPlace[];
}

const HomePage: NextPage<HomeProps> = ({ initialPlaces }) => (
  <Meta title='Book your future trip' description='Best routes for travelling'>
    <Home initialPlaces={initialPlaces} />
  </Meta>
);

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.fetch(placeQuery);

  return {
    props: {
      initialPlaces: result,
    },
  };
};

export default HomePage;
