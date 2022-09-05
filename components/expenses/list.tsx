import { Text, FlatList } from 'react-native';
import ExpenseItem from './item';

const renderExpenseItem = (itemData: any) => {
  const { item } = itemData;
  return <ExpenseItem {...item} />;
};

interface listProps {
  expenses?: any;
}
const ExpensesList: React.FC<listProps> = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item: any) => item.id}
    />
  );
};

export default ExpensesList;
