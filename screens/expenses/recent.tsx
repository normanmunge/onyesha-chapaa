import { useContext } from 'react';
import ExpensesOutput from '../../components/expenses/output';
import { ExpensesContext } from '../../store/expenses-context';
import { getDateMinusDays } from '../../utils/date';

const RecentExpensesScreen = () => {
  const recentExpensesCtx = useContext(ExpensesContext);
  const recenteExpenses = recentExpensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const lastSevenDays = getDateMinusDays(today, 7);

    return expense['date'] >= lastSevenDays && expense['date'] <= today;
  });
  return (
    <ExpensesOutput
      expenses={recenteExpenses}
      period='Last 7 days'
      fallbackText='No expenses for last 7 days!'
    />
  );
};

export default RecentExpensesScreen;
