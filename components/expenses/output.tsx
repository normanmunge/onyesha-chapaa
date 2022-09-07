import { View, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import ExpensesList from './list';
import ExpensesSummary from './summary';
interface outputProps {
  expenses?: any;
  period?: string;
}

const ExpensesOutput: React.FC<outputProps> = ({ expenses, period }) => {
  const { container } = styles;
  return (
    <View style={container}>
      <ExpensesSummary period={period} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: theme.colors.primary_dark,
  },
});
