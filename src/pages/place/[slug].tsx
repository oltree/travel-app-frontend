import { Place } from '@/components/screen/place';
import { API_URL } from '@/shared/constants/api';
import { IPlace } from '@/shared/types/place';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface PlaceProps {
  place: IPlace;
}

const PlacePage: NextPage<PlaceProps> = ({ place }) => <Place place={place} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${API_URL}/places`);
  const places: IPlace[] = await response.json();

  const paths = places.map((place) => ({
    params: { slug: place.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${API_URL}/places/${params?.slug}`);
  const place = await response.json();

  return { props: { place } };
};

export default PlacePage;
