import {Product} from './item-row/product';

export const products: Product[] = [
  {
    identifier: '1',
    description: 'Pizza Margeritha',
    price_small: 3.80,
    price_big: 4.50,
    type: 'pizza'
  },
  {
    identifier: '2',
    description: 'Pizza Salami',
    price_small: 4.50,
    price_big: 5.50,
    type: 'pizza'
  },
  {
    identifier: '3',
    description: 'Lasagne',
    price_big: 5.00,
    type: 'pasta'
  },
  {
    identifier: '4',
    description: 'Pasta Napoli',
    price_big: 5.50,
    type: 'pasta'
  },
  {
    identifier: '5',
    description: 'Pasta Bolognese',
    price_big: 6.00,
    type: 'pasta'
  },
  {
    identifier: '6',
    description: 'Wiener Schnitzel',
    price_big: 6.50,
    type: 'schnitzel'
  },
  {
    identifier: '7',
    description: 'Zigeuner Schnitzel',
    price_big: 7.50,
    type: 'schnitzel'
  },
  {
    identifier: '8',
    description: 'Pommes',
    price_small: 1.20,
    price_big: 2.00,
    type: 'snacks'
  },
  {
    identifier: '9',
    description: '6er Chicken Nuggets',
    price_big: 2.99,
    type: 'snacks'
  },
  {
    identifier: '10',
    description: 'Ben & Jerry\'s',
    price_big: 2.00,
    type: 'snacks'
  },
];

export type SizeType = 'big' | 'small';
