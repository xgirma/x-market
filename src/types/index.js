import { shape, number, string, oneOf } from 'prop-types';

const itemsType = shape({
  id: number.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  description: string.isRequired,
}).isRequired;

const localeType = shape({
  country: oneOf(['US', 'UK', 'BE']),
}).isRequired;

export { itemsType, localeType };
