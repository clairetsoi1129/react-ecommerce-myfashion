import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'obv0yatn',
  dataset: 'production',
  apiVersion: '2023-05-06',
  useCdn: true,
  token: process.env.REACT_APP_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);