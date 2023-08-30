import { Home } from '@/components/screen/home';
import { IPlace } from '@/types/place';
import { GetStaticProps, NextPage } from 'next';

export interface HomeProps {
  places: IPlace[];
}

const HomePage: NextPage<HomeProps> = ({ places }) => <Home places={places} />;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/places');
  const places = await response.json();

  return {
    props: {
      places,
    },
  };
};

export default HomePage;
