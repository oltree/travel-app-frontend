import { Meta } from '@/components/meta';
import { Home } from '@/components/screen/home';
import { API_URL } from '@/shared/constants/api';
import { IPlace } from '@/shared/types/place';
import { GetStaticProps, NextPage } from 'next';

export interface HomeProps {
  initialPlaces: IPlace[];
}

const HomePage: NextPage<HomeProps> = ({ initialPlaces }) => (
  <Meta title='Book your future trip' description='Best routes for travelling'>
    <Home initialPlaces={initialPlaces} />
  </Meta>
);

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${API_URL}/places`);
  const initialPlaces = await response.json();

  return {
    props: {
      initialPlaces,
    },
  };
};

export default HomePage;
