import { Home } from '@/components/screen/home';
import { API_URL } from '@/shared/constants/api';
import { IPlace } from '@/shared/types/place';
import { GetStaticProps, NextPage } from 'next';

export interface HomeProps {
  initialPlaces: IPlace[];
}

const HomePage: NextPage<HomeProps> = ({ initialPlaces }) => <Home initialPlaces={initialPlaces} />;

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
