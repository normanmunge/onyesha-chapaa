import { createContext, useReducer } from 'react';
import { DUMMY_EXPENSES } from '../data/mockup-data';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({
    description,
    amount,
    date,
  }: {
    description: string;
    amount: number;
    date: Date;
  }) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (
    id: string,
    {
      description,
      amount,
      date,
    }: { description: string; amount: number; date: Date }
  ) => {},
});

function expensesReducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense: any) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;

    case 'DELETE':
      return state.filter((expense: any) => expense.id !== action.payload.id);
    default:
      state;
  }
}

type expenseProps = {
  children: any;
};

const ExpensesContextProvider = ({ children }: expenseProps) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: any) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id: string, expenseData: any) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const valueState = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return (
    <ExpensesContext.Provider value={valueState}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
