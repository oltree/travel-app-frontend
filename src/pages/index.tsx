import { Meta } from '@/components/meta';
import { Home } from '@/components/screen/home';
import { IPlace } from '@/shared/types/place';
import { GetStaticProps, NextPage } from 'next';
import { client } from '@sanity/lib/client';
import { placesQuery } from '@/shared/constants/queries';

export interface HomeProps {
  initialPlaces: IPlace[];
}

const HomePage: NextPage<HomeProps> = ({ initialPlaces }) => (
  <Meta title='Book your future trip' description='Best routes for traveling'>
    <Home initialPlaces={initialPlaces} />
  </Meta>
);

export const getStaticProps: GetStaticProps = async () => {
  const places = await client.fetch(placesQuery);

  return {
    props: {
      initialPlaces: places,
    },
  };
};

export default HomePage;
