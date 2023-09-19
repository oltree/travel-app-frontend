import { Meta } from '@/components/meta';
import { Place } from '@/components/screen/place';
import { getPlaceQuery, placesQuery } from '@/shared/constants/queries';
import { IPlace } from '@/shared/types/place';
import { client } from '@sanity/lib/client';
import { urlForImage } from '@sanity/lib/image';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { toPlainText } from '@portabletext/react';

interface PlaceProps {
  place: IPlace;
}

const PlacePage: NextPage<PlaceProps> = ({ place }) => (
  <Meta
    title={place.location.country}
    description={toPlainText(place.description)}
    image={urlForImage(place.imagePath).url()}
  >
    <Place place={place} />
  </Meta>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const places: IPlace[] = await client.fetch(`${placesQuery}{slug}`);

  const paths = places.map(place => ({
    params: { slug: place.slug.current },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const place: IPlace = await client.fetch(getPlaceQuery(String(params?.slug)));

  return { props: { place } };
};

export default PlacePage;
