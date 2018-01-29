import PropTypes, { shape, number, string, oneOf } from 'prop-types';

const items = shape({
  id: number,
  name: string,
  price: number,
  description: string,
}).isRequired;

const itemsType = PropTypes.arrayOf(items);

const localeType = shape({
  country: oneOf(['US', 'BE', 'SE']),
}).isRequired;

const translateType = PropTypes.func.isRequired;

const itemType = shape({
  id: number,
  name: string,
  price: number,
  description: string,
}).isRequired;

export { itemsType, localeType, itemType, translateType };
