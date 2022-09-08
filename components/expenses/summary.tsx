import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

interface summaryProps {
  period?: string;
  expenses?: any; //define the array property
}
const ExpensesSummary: React.FC<summaryProps> = ({ expenses, period }) => {
  const { container, periodText, sumText } = styles;

  const expensesSum = expenses.reduce((sum: number, expenses: any) => {
    return sum + expenses.amount;
  }, 0);
  return (
    <View style={container}>
      <Text style={periodText}>{period}</Text>
      <Text style={sumText}>{expensesSum} KES</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: theme.colors.error_lighter,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  periodText: {
    fontSize: 12,
    color: theme.colors.primary_light,
  },
  sumText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
