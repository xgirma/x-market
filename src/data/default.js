import Translate from '../lib/Translate';

const itemDefault = {
  id: 0,
  name: '',
  description: '',
  price: 0.00,
};

const itemsDefault = [
  {
    id: 0,
    name: '',
    description: '',
    price: 0.00,
  },
  {
    id: 1,
    name: '',
    description: '',
    price: 0.00,
  },
];

const localeDefault = {
  country: 'US',
};

const translateDefault = new Translate('US').translate;

export {
  itemDefault,
  itemsDefault,
  localeDefault,
  translateDefault,
};
