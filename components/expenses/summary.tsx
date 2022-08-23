import { View, Text } from 'react-native';

interface summaryProps {
  period?: string;
  expenses?: any;
}
const ExpensesSummary: React.FC<summaryProps> = ({ expenses, period }) => {
  const expensesSum = expenses.reduce((sum: number, expenses: any) => {
    return sum + expenses.amount;
  }, 0);
  return (
    <View>
      <Text>{period}</Text>
      <Text>{expensesSum.toFixed(2)} KES</Text>
    </View>
  );
};

export default ExpensesSummary;
