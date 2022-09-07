import { DUMMY_EXPENSES_TYPE } from './interfaces';

const DUMMY_EXPENSES: DUMMY_EXPENSES_TYPE[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 4000,
    date: new Date('2022-09-03'),
  },
  {
    id: 'e2',
    description: 'Transport',
    amount: 300,
    date: new Date('2022-08-22'),
  },
  {
    id: 'e3',
    description: 'Book',
    amount: 1500,
    date: new Date('2021-09-05'),
  },
  {
    id: 'e4',
    description: 'Food',
    amount: 500,
    date: new Date('2021-11-23'),
  },
];

export { DUMMY_EXPENSES };
