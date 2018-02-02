const FOUR = [{
  id: 101,
  name: 'iPhone X',
  description: 'Say hello to the future.',
  price: 999.00,
}, {
  id: 102,
  name: 'Mac Pro',
  description: 'Built for creativity on an epic scale.',
  price: 2999.00,
}, {
  id: 103,
  name: 'iPad Pro',
  description: 'Anything you can do, you can do better.',
  price: 799.00,
},
{
  id: 104,
  name: 'iPad Pro',
  description: 'Anything you can do, you can do better.',
  price: 799.00,
}];

const ITEM_TO_REMOVE = {
  id: 104,
  name: 'iPad Pro',
  description: 'Anything you can do, you can do better.',
  price: 799.00,
};

const THREE = [{
  id: 101,
  name: 'iPhone X',
  description: 'Say hello to the future.',
  price: 999.00,
}, {
  id: 102,
  name: 'Mac Pro',
  description: 'Built for creativity on an epic scale.',
  price: 2999.00,
}, {
  id: 103,
  name: 'iPad Pro',
  description: 'Anything you can do, you can do better.',
  price: 799.00,
}];

const NONE = [];

const EMPTY = [{}];

const ITEM_DEFAULT = {
  id: 0,
  name: '',
  description: '',
  price: 0.00,
};

const ITEMS_DEFAULT = [
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

export {
  FOUR,
  THREE,
  NONE,
  EMPTY,
  ITEM_DEFAULT,
  ITEMS_DEFAULT,
  ITEM_TO_REMOVE,
};
