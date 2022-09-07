import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../../constants/theme';
import ExpensesList from './list';
import ExpensesSummary from './summary';
interface outputProps {
  expenses?: any;
  period?: string;
  fallbackText?: string;
}

const ExpensesOutput: React.FC<outputProps> = ({
  expenses,
  period,
  fallbackText,
}) => {
  const { container, infoText } = styles;

  let content = <Text style={infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={container}>
      <ExpensesSummary period={period} expenses={expenses} />
      {content}
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
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
