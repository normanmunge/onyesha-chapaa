import { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseForm from '../../components/forms/manage';
import IconButton from '../../components/ui/buttons/icon-button';

import { theme } from '../../constants/theme';
import { ExpensesContext } from '../../store/expenses-context';

const ManageExpenseScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const { container, deleteContainer } = styles;

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense['id'] === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  type expenseDataProps = {
    amount: number;
    date: Date;
    description: string;
  };

  const confirmHandler = (data: expenseDataProps) => {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, data);
    } else {
      expenseCtx.addExpense(data);
    }
    navigation.goBack();
  };

  return (
    <View style={container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitLabelProp={isEditing ? 'Update' : 'Add'}
        defaultValues={selectedExpense ? selectedExpense : ''}
      />

      {isEditing && (
        <View style={deleteContainer}>
          <IconButton
            icon='trash'
            color={theme.colors.error}
            size={36}
            onPressHandler={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.colors.primary_darker,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: theme.colors.primary_lighter,
    alignItems: 'center',
  },
});
