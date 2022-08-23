import { View, Text, FlatList } from 'react-native';
import ExpensesList from './list';
import ExpensesSummary from './summary';

interface outputProps {
  expenses?: any;
  period?: string;
}

type DUMMY_EXPENSES_TYPE = {
  id: string;
  description: string;
  amount: number;
  date: any;
};
const DUMMY_EXPENSES: DUMMY_EXPENSES_TYPE[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 4000,
    date: new Date('2022-08-23'),
  },
  {
    id: 'e2',
    description: 'Transport',
    amount: 300,
    date: new Date('2022-05-21'),
  },
  {
    id: 'e3',
    description: 'Book',
    amount: 1500,
    date: new Date('2021-07-02'),
  },
  {
    id: 'e4',
    description: 'Food',
    amount: 500,
    date: new Date('2022-08-23'),
  },
];
const ExpensesOutput: React.FC<outputProps> = ({ expenses, period }) => {
  return (
    <View>
      <ExpensesSummary period={period} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
