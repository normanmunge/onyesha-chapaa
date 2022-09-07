import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import ExpensesOutput from '../../components/expenses/output';
import { ExpensesContext } from '../../store/expenses-context';

const AllExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput period='Total' expenses={expensesCtx.expenses} />;
};

export default AllExpensesScreen;

const styles = StyleSheet.create({});
