import { Text, FlatList } from 'react-native';

const renderExpenseItem = (itemData: any) => {
  const { item } = itemData;
  const { description } = item;
  return <Text>{description}</Text>;
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
