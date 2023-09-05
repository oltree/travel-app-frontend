import { Home } from '@/components/screen/home';
import { API_URL } from '@/shared/constants/api';
import { IPlace } from '@/shared/types/place';
import { GetStaticProps, NextPage } from 'next';

export interface HomeProps {
  places: IPlace[];
}

const HomePage: NextPage<HomeProps> = ({ places }) => <Home places={places} />;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${API_URL}/places`);
  const places = await response.json();

  return {
    props: {
      places,
    },
  };
};

export default HomePage;
