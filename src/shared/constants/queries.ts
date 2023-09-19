export const placesQuery = `*[_type == "place"]`;
export const getPlaceQuery = (slug: string) =>
  `*[_type == "place" && slug.current == "${slug}"][0]{location, imagePath, description, rating, duration}`;
