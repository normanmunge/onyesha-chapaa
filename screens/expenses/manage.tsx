import { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../../components/ui/buttons/icon-button';
import PrimaryButton from '../../components/ui/buttons/primary-button';
import { theme } from '../../constants/theme';

const ManageExpenseScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const { container, deleteContainer, buttonsContainer, button } = styles;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={container}>
      <View style={buttonsContainer}>
        <PrimaryButton
          mode='flat'
          styleProp={button}
          onPressHandler={cancelHandler}
        >
          Cancel
        </PrimaryButton>
        <PrimaryButton styleProp={button} onPressHandler={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </PrimaryButton>
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
